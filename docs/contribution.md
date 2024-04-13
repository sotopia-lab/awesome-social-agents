# Contribution
Hi everyone! Thanks for the help!! Your expertise is invaluable to the community 💡. Here are some steps to contribute to the repository:

### Steps

1. Fork the repository.
3. Add each paper to the `main.bib` file, under the section you are working on. You could pick one section that fits the paper the most. This file will sync with the Overleaf project `main.bib` file after your PR is merged. **Don't add the papers that are already in the `main.bib`**.
4. Add four new fields for each paper you added: `environments`, `agents`, `evaluation`, and `other`. The acceptable tags for these four fields are in [taxonomy](https://sotopia-lab.github.io/awesome-social-agents/taxonomy/).
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
