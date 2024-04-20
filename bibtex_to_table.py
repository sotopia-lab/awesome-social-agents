import datetime
import bibtexparser # type: ignore
import bibtexparser.middlewares as m # type: ignore
from tabulate import tabulate # type: ignore
import pandas as pd # type: ignore
import re
from pprint import pprint
from collections import Counter
from itertools import groupby


# Patch bibtextparser to exit with when the keys are repeated
from copy import deepcopy
import logging

from bibtexparser.model import Entry # type: ignore
from bibtexparser.model import ExplicitComment
from bibtexparser.model import ImplicitComment
from bibtexparser.model import Preamble
from bibtexparser.model import String
from bibtexparser.model import DuplicateBlockKeyBlock
from bibtexparser.model import DuplicateFieldKeyBlock
from bibtexparser.middlewares.middleware import BlockMiddleware # type: ignore
def _transform_block(self, block, library):
    block = block if self.allow_inplace_modification else deepcopy(block)
    if isinstance(block, Entry):
        return self.transform_entry(block, library)
    elif isinstance(block, String):
        return self.transform_string(block, library)
    elif isinstance(block, Preamble):
        return self.transform_preamble(block, library)
    elif isinstance(block, ExplicitComment):
        return self.transform_explicit_comment(block, library)
    elif isinstance(block, ImplicitComment):
        return self.transform_implicit_comment(block, library)

    if isinstance(block, DuplicateBlockKeyBlock):
        raise ValueError("Repeated keys found in the BibTeX file: {}".format(block.raw))
    if isinstance(block, DuplicateFieldKeyBlock):
        raise ValueError("Repeated field key found in the BibTeX file: {}".format(block.raw))
    logging.warning("Unknown block type: %s", block)
    return block

BlockMiddleware.transform_block = _transform_block 

# environments:
# collaboration, competition, mixed_objectives, implicit_objectives,
# text, virtual, embodied, robotics,
# n/a

# agents:
# prompting_and_in_context_learning, finetuning, reinforcement_learning, pretraining,
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
    "agents": ["prompting_and_in_context_learning", "finetuning", "reinforcement_learning", "pretraining", "two_agents", "more_than_three_agents", "agent_teams", "agents_with_memory", "agents_with_personas", "n/a"],
    "evaluation": ["qualitative", "human", "rule_based", "model_based", "n/a"],
    "other": ["human_agent", "simulated_humans", "health", "education", "policy", "fully_omniscient", "more_omniscient", "more_information_asymmetrical", "n/a"]
}

def check_repeat_entries(entries: list[dict]) -> None:
    titles = [entry["title"] for entry in entries] 
    ids = [entry["ID"] for entry in entries]
    if len(ids) != len(set(ids)) or len(titles) != len(set(titles)):
        repeated_entries = set([title for title in titles if titles.count(title) > 1])
        if repeated_entries:
            raise ValueError(f"Repeated titles found: {repeated_entries}")
        repeated_ids = set([id for id in ids if ids.count(id) > 1])
        if repeated_ids:
            raise ValueError(f"Repeated ids found: {repeated_ids}")


def extract_bibtex_entries(bibtex: str) -> list[dict[str, str]]:
    layers = [
        m.MonthIntMiddleware(), # Months should be represented as int (0-12)
    ]
    bib_database = bibtexparser.parse_string(bibtex, append_middleware=layers)
    
    # Convert BibTeX entries to a list of dictionaries
    entries = []
    subsection = ""
    for entry in bib_database.entries:
        if entry['author'] == 'specical entry':
            subsection = entry['ID']
            continue
        entry_dict = {}
        for field, value in entry.items():
            entry_dict[field] = value
        entry_dict["subsection"] = subsection
        entries.append(entry_dict)
    return entries


def parse_markdown_file(file_path: str) -> dict[str, list[str]]:
    return TAXONOMY


def basic_stats_for_tags(entries: list[dict]) -> str:
    print(f"Total number of papers: {len(entries)}")
    environments_list = ['text', 'virtual', 'embodied', 'robotics']
    agents_list = ['prompting_and_in_context_learning', 'finetuning', 'reinforcement_learning']
    environment_tag_list = [entry["environments"] for entry in entries]
    environment_tag_list = ['text' if 'text' in tags else 'virtual' if 'virtual' in tags else 'embodied' if 'embodied' in tags else 'robotics' if 'robotics' in tags else 'n/a' for tags in environment_tag_list]
    agent_tag_list = [entry["agents"] for entry in entries]
    agent_tag_list = ['prompting_and_in_context_learning' if 'prompting_and_in_context_learning' in tags else 'finetuning' if 'finetuning' in tags else 'reinforcement_learning' if 'reinforcement_learning' in tags else 'n/a' for tags in agent_tag_list]
    counter_based_on_env = Counter(environment_tag_list)
    counter_based_on_agents = Counter(agent_tag_list)

    markdown_string = f"### Basic Stats\n"
    markdown_string += f"Total number of papers: {len(entries)}\n"
    markdown_string += f"#### Environments\n"

    for env in environments_list:
        markdown_string += f"{env}: {counter_based_on_env.get(env, 0)}\n"
    markdown_string += f"#### Agents\n"

    for agent in agents_list:
        markdown_string += f"{agent}: {counter_based_on_agents.get(agent, 0)}\n"

    return markdown_string


def basic_stats(entries: list[dict]) -> str:
    markdown_string = f"### Basic Stats\n"
    markdown_string += f"Total number of papers: {len(entries)}\n"
    subsections = [entry["subsection"] for entry in entries]
    subsection_counter = Counter(subsections)
    markdown_string += f"#### Subsections\n"
    for subsection, count in subsection_counter.items():
        if subsection:
            markdown_string += f"{subsection}: {count}\n"
    return markdown_string


def preprocess_entry(entry: dict, taxonomy:dict[str, list[str]]) -> None:
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
        raise ValueError(f"Month field is missing for paper {entry['title']}")

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
    entry["date"] = f"{entry['month']}, {entry['year']}"

    # Add taxonomy tags
    for category, subcategories in taxonomy.items():
        subcategory = entry.get(category, "")
        subcategory_list = subcategory.split(", ")
        if not subcategory_list:
            raise ValueError(f"{category} field is missing")
        for subcategory in subcategory_list:
            if subcategory not in subcategories:
                raise ValueError(f"For paper {entry['title']}, {subcategory} is not a valid {category}, please choose from {subcategories}")

def order_entries_by_date(entries: list[dict]) -> list[dict]:
    """Sort the entries by date within the same subsection."""
    sorted_entries = []
    for _, group in groupby(entries, key=lambda x: x["subsection"]):
        group_sorted = sorted(group, key=lambda x: datetime.datetime.strptime(x["date"], "%B, %Y"), reverse=True)
        sorted_entries.extend(group_sorted)
    return sorted_entries

def bibtex_to_table(bibtex: str, taxonomy: dict[str, list[str]]) -> tuple[str, str]:
    entries = extract_bibtex_entries(bibtex)
    for entry in entries:
        preprocess_entry(entry, taxonomy)
    
    stats = basic_stats(entries)
    # Create a Markdown and helper table
    headers = ["Title", "Date"] + list(taxonomy.keys())
    helper_headers = ["helper"]
    rows = []
    helper_rows = []
    ordered_entries = order_entries_by_date(entries)
    subsection_name = ""
    for entry in ordered_entries:
        row = [entry["title_w_url"], entry["date"]]+[entry[category] for category in taxonomy.keys()]
        if entry["subsection"] != subsection_name:
            subsection_name = entry["subsection"]
            helper_rows.append(f"### {subsection_name}")
        helper_rows.append(f"[{row[1]}] {row[0]}, {entry['author_et_al']}, {entry['venue']}")
        rows.append(row)
    
    df = pd.DataFrame(rows, columns=headers)

    # Create a helper table
    markdown = df.to_markdown(index=False)
    helper_markdown = "\n\n".join(helper_rows)
    return markdown+'\n\n'+stats, helper_markdown

# Example usage:
taxonomy = parse_markdown_file('./docs/taxonomy.md')

# Read the BibTeX file
bibtex_file = "./main.bib"
untagged_bibtex_file = "./untagged.bib"

with open(bibtex_file, "r") as f:
    bibtex_string = f.read()

with open(untagged_bibtex_file, "r") as f:
    untagged_bibtex_string = f.read()

check_repeat_entries(extract_bibtex_entries(bibtex_string)+extract_bibtex_entries(untagged_bibtex_string))

output_file = "./docs/paper_table.md"
helper_file = "./docs/helper.md"
markdown_table, helper_string = bibtex_to_table(bibtex_string, taxonomy=taxonomy)

# Write the Markdown table to the output file
with open(output_file, "w") as f:
    f.write(markdown_table)

# Write the helper table to the helper file
with open(helper_file, "w") as f:
    f.write(helper_string)

print("🎉 Successfully written the Markdown table to", output_file)
print("🎉 Successfully written the helpers to", helper_file)

    
