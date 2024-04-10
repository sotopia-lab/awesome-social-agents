# Contribution
Hi everyone! Thanks for the help!! Your expertise is invaluable to the community 💡. Here are some steps to contribute to the repository:

### Steps
1. Fork the repository.
2. Create a new branch. `paper/subsectionName`
3. Add your papers to the `main.bib` file to the corresponding section (you should pick one section that fits the paper the most). This file will sync with the Overleaf project `main.bib` file.
    1. Please double check if the paper is already in the `main.bib` file. If it is, you can skip this step.
4. Tag your papers in the `main.bib` file with the required properties. Please check out the example paper entry at the very top of the `main.bib` file.
    1. Please read the [`taxonomy.md`](taxonomy.md) file **carefully** to understand the tags we use.
    2. You have to use the exact verbim of the tags in the `main.bib` file. This is important for the `bibtex_to_table.py` script to work correctly.
    3. `TBD` is a special tag that you can use if you are not sure about the tag for now. We will review it later. We encourage you to use the tag sparingly.
    4. Wanna add a new tag? Please create an issue in the repository and we will discuss it. Or post in the Slack channel.
5. Run `python bibtex_to_table.py` to update the `./docs/paper_table.md` file. Please double check the output markdown file and make sure the table is updated correctly.
6. Update the `./docs/README.md` file with the paper entry. It should be a very easy job now that you have the paper entry in the `main.bib` file. 
    1. You can simply copy and paste the content in the `helper` column of the `./docs/paper_table.md` file to the corresponding section in the `./docs/README.md` file. 
    2. Note that in the `./docs/README.md` file, you can paste the entry to multiple sections if the paper fits multiple sections.
7. Once you are done, create a pull request to the main repository. And yayyy, congrats! 🎉


### Notes
- If you have any questions, feel free to ask in the Slack channel or create an issue in the repository.
