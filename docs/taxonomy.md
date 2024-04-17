# Tags that you can add to each field
We ask you to add four additional fields to each bibtex entry. The format of a bibtex you should add to `main.bib` is as follows

```bibtex
@misc{Nobody37,
    author = "Nobody Jr",
    title = "The last missing piece of AGI",
    year = "2037",
    url = "https://pdf.agi.org",
    environments = {mixed_objectives, implicit_objectives, robotics},
    agents = {agent_teams, more_than_three_agents, agents_with_memory, agents_with_personas},
    evaluation = {model_based},
    other = {human_involvement}
}
```

## 1 Environments and Tasks
Here are acceptable tags for `environments` field:
```
collaboration, competition, mixed_objectives, implicit_objectives,
text, virtual, embodied, robotics,
n/a
```
Please find the explanations to each of these tags below:

### Social interaction types 
1. Collaboration (`collaboration`): *The objectives are shared among agents*
2. Competition (`competition`): *The objectives are zero-sum*
3. Mixed Objectives (`mixed_objectives`): *Agents’ have different goals, but they are not zero-sum*
4. Implicit Objectives (`implicit_objectives`): *Goals are not expressed explicitly*

### Domains
1. Text (`text`): *non-embodied environments with text-based observation spaces and action spaces, e.g. chatbots environment*
2. Virtual (`virtual`): *non-embodied environments with multimodal observation spaces and/or actions spaces, e.g. web browser environment*
3. Embodied (`embodied`): *environments where policies interact with the world through the observation and actions of "bodies" (which also implies ego-centric view). A body typically takes up space and has the ability to influence the environment, e.g. Minecraft, Habitat, AI2THOR* 
4. Robotics (`robotics`): *real physical world environment*

Embodied environments in principle include robotics environments, but here we consider only the non-real physical world ones as embodied environments. 

`n/a` means there is no environment in the paper, or the environment is not covered in the above categorization. Please use `n/a` sparingly.

## 2 Agents and Modeling
Here are acceptable tags for `agents` field:
```
prompting_and_in_context_learning, finetuning, reinforcement_learning,
two_agents, more_than_three_agents, agent_teams,
agents_with_memory, agents_with_personas,
n/a
```
These tags are straight-forward. Please note that we do count humans as agents here. `n/a` is similar to above. 

## 3 Evaluation
Here are acceptable tags for `agents` field:
```
qualitative, human, rule_based, model_based,
n/a
```

1. Only qualitative evaluation (`qualitative`): *You should definitely add this tag if a work is only based on qualitative evaluation*
2. Human evaluation (`human`): *Quantitative evaluation based on human judgment*
3. Rule-based evaluation (`rule_based`): *The evaluation is based on a set of rules*
4. Model-based evaluation (`model_based`): *Using machine learning model to judge*


## 4 Other
Here are acceptable tags for `other` field:
```
human_agent, simulated_humans, 
health, education, policy,
fully omniscient, more omniscient, more information asymmetrical
n/a
```
### Human involvement
`human_agent` means at least one of the agent is a human.
`simulated_humans` means the agents are simulated humans.

### Application domains
`health` and `education` are self-explanatory.
`policy` means the simulation is related to policy-making.

### Information asymmetry levels
`fully_omniscient` means all agents have full information about the environment and other agents.
`more_omniscient` means agents have only one or two sources of information that other agents do not have (in the prompts for LLM-powered agents). This includes but not limited to roles, output format, occupation, partial overview of the environment, etc.
`more_information_asymmetrical` means agents have various of different information sources that other agents do not have.

Here you can use `n/a` if none of the above tags fits the paper.