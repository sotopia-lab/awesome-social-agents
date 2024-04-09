import datetime
import bibtexparser # type: ignore
from tabulate import tabulate # type: ignore
from pytablewriter import MarkdownTableWriter # type: ignore
import pandas as pd # type: ignore
import re

def parse_markdown_file(file_path: str) -> dict[str, list[str]]:
    with open(file_path, 'r') as file:
        markdown_text = file.read()

    taxonomy: dict[str, list[str]] = {}

    for line in markdown_text.split("\n"):
        if line.startswith("##") and not line.startswith("###"):
            category = line.replace("##", "").strip()
            category = "_".join(category.lower().split(" ")[1:])
            taxonomy[category] = []
        elif line.startswith("###"):
            subcategory = line.replace("###", "").strip()
            if subcategory:
                taxonomy[category].append(subcategory)
    return taxonomy


def preprocess_entry(entry: dict, taxonomy:dict[str, list[str]]) -> dict:
    entry["ID"] = entry.get("ID", "")
    
    entry["title"] = entry.get("title", "")
    if not entry["title"]:
        raise ValueError("Title field is missing")
    
    authors = entry.get("author", "")
    authors_list = authors.split(" and ")
    authors_processed = []
    for author in authors_list:
        author_parts = author.split(", ")
        if len(author_parts) == 2:
            author_processed = f"{author_parts[1]} {author_parts[0]}"
            authors_processed.append(author_processed)
        else:
            authors_processed.append(author)
    authors = ", ".join(authors_processed)
    entry["author"] = authors

    if not entry["author"]:
        raise ValueError("Author field is missing")
    
    entry["year"] = entry.get("year", "")
    if not entry["year"]:
        raise ValueError("Year field is missing")

    entry["url"] = entry.get("url", "")
    if not entry["url"]:
        raise ValueError("URL field is missing")

    if "eprint" in entry:
        entry["month"] = entry["eprint"].split(".")[0][2:]
        print(entry["month"])
        month_name = datetime.date(1900, int(entry["month"]), 1).strftime('%B').lower()
        entry["month"] = month_name.capitalize()

    entry["title_w_url"] = f"[{entry['title']}]({entry['url']})"
    entry["date"] = f"{entry['month']}, {entry['year']}" if "month" in entry else entry["year"]

    # Add taxonomy tags
    for category, subcategories in taxonomy.items():
        subcategory = entry.get(category, "")
        if not subcategory:
            raise ValueError(f"{category} field is missing")
        elif subcategory not in subcategories and subcategory != "Irrelevant":
            raise ValueError(f"{subcategory} is not a valid {category}, please choose from {subcategories}")
    return entry

def bibtex_to_table(bibtex: str, taxonomy: dict[str, list[str]]) -> str:
    # Parse the BibTeX string
    bib_database = bibtexparser.parse_string(bibtex)
    
    # Convert BibTeX entries to a list of dictionaries
    entries = []
    for entry in bib_database.entries:
        entry_dict = {}
        for field, value in entry.items():
            entry_dict[field] = value
        entry_dict_processed = preprocess_entry(entry_dict, taxonomy)
        entries.append(entry_dict)
    
    # Create a Markdown table
    headers = ["Title", "Date"] + list(taxonomy.keys())
    rows = []
    for entry in entries:
        row = [entry["title_w_url"], entry["date"]]+[entry[category] for category in taxonomy.keys()]
        rows.append(row)
    
    df = pd.DataFrame(rows, columns=headers)
    markdown = df.to_markdown(index=False)
    
    return markdown

# Example usage:
taxonomy = parse_markdown_file('./docs/taxonomy.md')

# Read the BibTeX file
bibtex_file = "./bibtex/social_agents.bib"
with open(bibtex_file, "r") as f:
    bibtex_string = f.read()

output_file = "./docs/paper_table.md"
markdown_table = bibtex_to_table(bibtex_string, taxonomy=taxonomy)
print(markdown_table)

# Write the Markdown table to the output file
with open(output_file, "w") as f:
    f.write(markdown_table)

    

