# Contribution
Hi everyone! Thanks for the help!! Your expertise is invaluable to the community 💡. Here are some steps to contribute to the repository:

### Steps
1. Fork the repository.
3. Add each paper to the `main.bib` file, under the section you are working on. You could pick one section that fits the paper the most. This file will sync with the Overleaf project `main.bib` file after your PR is merged. **Don't add the papers that are already in the `main.bib`**.
4. Add four new fields for each paper you added: `environments`, `agents`, `evaluation`, and `other`. The acceptable tags for these four fields are in `/taxonomy`.
5. Run `python bibtex_to_table.py` to update the `./docs/paper_table.md` file. Please double check the output markdown file and make sure the table is updated correctly.
6. Update the `./docs/README.md` file with the paper entry. It should be a very easy job now that you have the paper entry in the `main.bib` file. 
    1. You can simply copy and paste the content in the `helper` column of the `./docs/paper_table.md` file to the corresponding section in the `./docs/README.md` file. 
    2. Note that in the `./docs/README.md` file, you can paste the entry to multiple sections if the paper fits multiple sections.
7. Once you are done, create a pull request to the main repository. And yayyy, congrats! 🎉


### Notes
- If you have any questions, feel free to ask in the Slack channel or create an issue in the repository.
