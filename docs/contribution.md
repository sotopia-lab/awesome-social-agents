# Contribution
Hi everyone! Thanks for the help!! Your expertise is invaluable to the community 💡. Here are some steps to contribute to the repository:

### Steps

1. **Fork the repository.**

2. **Create a new branch:** Use a descriptive name following the convention `paper/subsectionName`.

3. **Add your papers to the `main.bib` file:**
  - Add your papers to the corresponding section in the `main.bib` file. This file will sync with the Overleaf project's `main.bib` file.
  - Before adding a new paper, double-check if it's already present in the `main.bib` file. If it is, you can skip this step.

4. **Tag your papers in the `main.bib` file with the required properties:**
  - Check out the example paper entry at the very top of the `main.bib` file for reference.
  - Read the [`taxonomy.md`](taxonomy.md) file **carefully** to understand the tags we use.
  - Use the exact verbatim of the tags in the `main.bib` file. This is important for the `bibtex_to_table.py` script to work correctly.
  - You can use the `TBD` tag if you're unsure about a particular tag for now. We will review it later. However, try to use this tag sparingly.
  - If you want to add a new tag, create an issue in the repository, or post in the Slack channel for discussion.

5. **Update the `./docs/paper_table.md` file:**
  - Run `python bibtex_to_table.py` to update the `./docs/paper_table.md` file.
  - Double-check the output Markdown file and ensure the table is updated correctly.

6. **Update the `./docs/README.md` file with the paper entry:**
  - Copy and paste the content from the `helper` column of the `./docs/paper_table.md` file to the corresponding section(s) in the `./docs/README.md` file.
  - Note: If the paper fits multiple sections, you can paste the entry into multiple sections in the `./docs/README.md` file.

7. **Create a Pull Request:**
  - Once you've completed the above steps, create a pull request to the main repository.
  - Congratulations! 🎉


### Notes
- If you have any questions, feel free to ask in the Slack channel or create an issue in the repository.
