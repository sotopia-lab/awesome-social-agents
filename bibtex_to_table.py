import datetime
import bibtexparser # type: ignore
import bibtexparser.middlewares as m # type: ignore
from tabulate import tabulate # type: ignore
import pandas as pd # type: ignore
import re
from pprint import pprint

# environments:
# collaboration, competition, mixed_objectives, implicit_objectives,
# text, virtual, embodied, robotics,
# n/a

# agents:
# prompting_and_in_context_learning, finetuning, reinforcement_learning,
# two_agents, more_than_three_agents, agent_teams,
# agents_with_memory, agents_with_personas,
# n/a

# evaluation:
# qualitative, human, rule_based, model_based,
# n/a

# other:
# human_agent, simulated_humans, 
# health, education, policy,
# fully_omniscient, more_omniscient, more_information_asymmetrical
# n/a

TAXONOMY  = {
    "environments": ["collaboration", "competition", "mixed_objectives", "implicit_objectives", "text", "virtual", "embodied", "robotics", "n/a"],
    "agents": ["prompting_and_in_context_learning", "finetuning", "reinforcement_learning", "two_agents", "more_than_three_agents", "agent_teams", "agents_with_memory", "agents_with_personas", "n/a"],
    "evaluation": ["qualitative", "human", "rule_based", "model_based", "n/a"],
    "other": ["human_agent", "simulated_humans", "health", "education", "policy", "fully_omniscient", "more_omniscient", "more_information_asymmetrical", "n/a"]
}

def parse_markdown_file(file_path: str) -> dict[str, list[str]]:
    return TAXONOMY


def preprocess_entry(entry: dict, taxonomy:dict[str, list[str]]) -> dict:
    entry["ID"] = entry.get("ID", "")
    
    if not entry.get("title", ""):
        raise ValueError("Title field is missing")

    if not entry.get("author", ""):
        raise ValueError("Author field is missing")

    if not entry.get("year", ""):
        raise ValueError("Year field is missing")
    
    if not entry.get("url", ""):
        raise ValueError("URL field is missing")
    
    authors_list = entry["author"].split(" and ")
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
    entry["author_et_al"] = authors.split(",")[0] + " et al."
    
    if "eprint" in entry:
        entry["month"] = entry["eprint"].split(".")[0][2:]
    
    if entry.get("month", ""):
        month_name = datetime.date(1900, int(entry["month"]), 1).strftime('%B').lower()
        entry["month"] = month_name.capitalize()
    else:
        raise ValueError("Month field is missing")

    # get the venue of the paper
    if "journal" in entry:
        entry["venue"] = entry["journal"]
    elif "booktitle" in entry:
        entry["venue"] = entry["booktitle"]
    elif "eprint" in entry:
        entry["venue"] = "arXiv"
    else:
        raise ValueError(f"Venue field is missing for the paper: {entry['title']}")

    entry["title_w_url"] = f"[{entry['title']}]({entry['url']})"
    entry["date"] = f"{entry['month']}, {entry['year']}" if "month" in entry else entry["year"]

    # Add taxonomy tags
    for category, subcategories in taxonomy.items():
        subcategory = entry.get(category, "")
        subcategory_list = subcategory.split(", ")
        if not subcategory_list:
            raise ValueError(f"{category} field is missing")
        for subcategory in subcategory_list:
            if subcategory not in subcategories:
                raise ValueError(f"For paper {entry['title']}, {subcategory} is not a valid {category}, please choose from {subcategories}")
    return entry

def bibtex_to_table(bibtex: str, taxonomy: dict[str, list[str]]) -> tuple[str, str]:
    # Parse the BibTeX string

    layers = [
        m.MonthIntMiddleware(), # Months should be represented as int (0-12)
    ]
    bib_database = bibtexparser.parse_string(bibtex, append_middleware=layers)
    
    # Convert BibTeX entries to a list of dictionaries
    entries = []
    for entry in bib_database.entries:
        entry_dict = {}
        for field, value in entry.items():
            entry_dict[field] = value
        entry_dict_processed = preprocess_entry(entry_dict, taxonomy)
        entries.append(entry_dict)
    # check if there are repeated entries and give exact repeated entries
    ids = [entry["title"] for entry in entries] 
    if len(ids) != len(set(ids)):
        repeated_entries = [entry['title'] for entry in entries if ids.count(entry["title"]) > 1]
        raise ValueError(f"Repeated entries found: {repeated_entries}")
    # Create a Markdown and helper table
    headers = ["Title", "Date"] + list(taxonomy.keys())
    helper_headers = ["helper"]
    rows = []
    helper_rows = []
    for entry in entries:
        row = [entry["title_w_url"], entry["date"]]+[entry[category] for category in taxonomy.keys()]
        helper_rows.append(f"[{row[1]}] {row[0]}, {entry['author_et_al']}, {entry['venue']}")
        rows.append(row)
    
    df = pd.DataFrame(rows, columns=headers)

    # Create a helper table
    df_helper = pd.DataFrame(helper_rows, columns=helper_headers)
    markdown = df.to_markdown(index=False)
    helper_markdown = df_helper.to_markdown(index=False)
    return markdown, helper_markdown

# Example usage:
taxonomy = parse_markdown_file('./docs/taxonomy.md')

# Read the BibTeX file
bibtex_file = "./main.bib"
with open(bibtex_file, "r") as f:
    bibtex_string = f.read()

output_file = "./docs/paper_table.md"
helper_file = "./docs/helper.md"
markdown_table, helper_table = bibtex_to_table(bibtex_string, taxonomy=taxonomy)

# Write the Markdown table to the output file
with open(output_file, "w") as f:
    f.write(markdown_table)

# Write the helper table to the helper file
with open(helper_file, "w") as f:
    f.write(helper_table)

print("🎉 Successfully written the Markdown table to", output_file)
print("🎉 Successfully written the helper table to", helper_file)

    

