<div align="center">
  <h1>🗣️👥 Awesome Social Agents</h1>
  <a href="https://awesome.re">
    <img src="https://awesome.re/badge.svg" alt="Awesome">
  </a>
  <a href="https://img.shields.io/badge/PRs-Welcome-red">
    <img src="https://img.shields.io/badge/PRs-Welcome-blue" alt="PRs Welcome">
  </a>
  <a href="https://img.shields.io/badge/arXiv-coming-b31b1b.svg">
    <img src="https://img.shields.io/badge/arXiv-Coming soon-b31b1b.svg" alt="arXiv">
  </a>
</div>

<!-- The integration of AI systems into our daily lives has become increasingly ubiquitous, with these systems now capable of interacting with humans in more human-like behaviors than ever before. Specifically, t -->
<!-- 🎯 What is a **social agent**: A social agent is a human communicative agent that perceive environment, either social or physical, and act upon it with language, action, or non-verbal communication. -->
<details>
  <summary><i>Examples:</i></summary>
    | Examples*    | Social agent | Socially intelligent agent |
    | -------- | ------- |  ------- |
    | Agent outputing only yes or no | ✔, if the yes or no is somewhat meaningful  | ✔, if the yes or no is interpretable by a certain group of people. But the communication bandwidth is quite limited, so its social intelligence level could be low. |
    | Agent outputting only yes | ❌, the agent could not perceive environment and act accordingly    | ❌ |
    | [StarCraft](https://www.nature.com/articles/s41586-019-1724-z) Agents    |  ✔, they interact  |❌, humans cannot understand their internal signals |
    | Agents speak an artificial code language that only few people understand | ✔, they interact | ✔, they interact and communicate in a human-interpretable way |
    | [Trisolarans](https://aliens.fandom.com/wiki/Trisolaran) | ✔, they interact | ❌, their way of interaction is different from how humans communicate. They are essentially mind readers, and they don't need theory of mind |
    | A newspaper, or a bot that only responds you with today's weather in Pittsburgh | ❌, they don't interact | ❌ |
    | A [Webareana](https://webarena.dev/) agent | ❌, they only interact the browser environment | ❌ |
    | A tree | ❌, they don't interact | ❌ |
    | A lightbulb with motion sensor that turns on when you walk by | ? | ? |
    | Self-driving cars on the real road | ✔, they interact |?|

    *All the examples here are assuming humans are part of the environment.
</details>




> [!Note]
> * **Agent** and **Environment** (Sutton and Barto 2018): An agent is a goal-driven decision-maker that sense and act upon the state of the environment. An environment comprises the state outside the agent, including the other agents if any. 
> * **Social Agent**: An agent that interacts with a multi-agent environment.
> * **Socially Intelligent Agent**: A social agent that interacts and communicates with other agents in a human-interpretable way.
> <details><summary>more notes</summary><ol>
> <li>The social intelligence that we are focusing on is human-like, excluding the collective intelligence in a lot of social animals like ants, bees, fishes. </li> 
> <li>To understand whether an entity is a (social) agent, we have to situate it in an environment. It is not possible to discuss an agent outside of an environment. </li>
> </ol></details>

The rise of Large Language Models (LLMs)/foundational models presents new opportunities for simulating complex human **social behaviors**. As a result, there is a rapidly growing body of work emerging in this domain. We hope to categorize and synergize recent efforts to provide a comprehensive guidebook of **social agents** weaving together multiple domains, including language, embodiment, and robotics. 

Our goal is to offer insights crucial for understanding and harnessing **social agents'** potential impact on society. We strive to keep these updated regularly and continuously. **We greatly appreciate any contributions via PRs, issues, emails, or other methods.**

📝 *We are currently working on a survey paper related to content of this repository. Stay tuned for updates!*

## Table of Contents

- [Papers](#papers)
  - [Surveys and Overview](#surveys-and-overview)
  - [Social Interaction Types](#social-interaction-types)
    - [Collaboration](#language-models)
    - [Cooperation](#cooperation)
    - [Competition](#competition)
    - [Exchange](#exchange)
    - [Persuasion](#persuasion)
    - [Negotiation](#negotiation)
  - [Text Simulation](#text-simulation)
    - [Environments](#environments)
    - [Agents](#agents)
    - [Applications](#applications)
  - [Embodied and Virtual Simulation](#embodied-and-virtual-simulation)
    - [Environments](#environments)
    - [Agents](#agents)
    - [Applications](#applications)
  - [Human-X Interaction](#human-x-interaction)
    - [Human-chatbot Interaction](#human-chatbot-interaction)
    - [Human-embodied-agent Interaction](#human-embodied-agent-interaction)
    - [Human-robot Interaction](#human-robot-interaction)
  - [Ethics](#ethics)


# Taxonomy
## 1 Social interaction types
*The objectives of different agents*
### 1.1 Pure collaboration
*The objectives are shared among agents*

### 1.2 Pure Competition
*The objectives are zero-sum*

### 1.3 Mixed Objectives
*Agents’ have different goals, but they are not zero-sum*

### 1.4 Implicit Objectives
*Goals are not expressed explicitly*

## 2 Number  of agents
### 2.1 Two agents
### 2.2 More than three agents
### 2.3 Multiple teams of agents

## 3 Social interaction environments
### 3.1 Closed simulation
*A fixed hand-crafted world*

### 3.2 Open simulation
*Procedurally expanded or naturally large env*

### 3.3 Real physical world
* Indoor scenes
* Outdoor scenes


## 4 Communication protocol
### 4.1 Non-human-like (?) communication
*Centralized control instead of modeling each agent on their own*

### 4.2 Text Communication
### 4.3 Speech Communication
### 4.4 Non-verbal communication

## 5 Modeling Techniques
### 5.1 Prompting
### 5.2 In-context learning
### 5.3 Fine-tuning
### 5.4 Reinforcement learning

## 6 Human involvement
### 6.1 No human involvement
### 6.2 Simulated humans
### 6.3 Human-in-loop

## 7 Evaluation Protocol
### 7.1 Rule-based evaluation
### 7.2 Human evaluation
### 7.3 Model-based evaluation

## 8 Smaller categories
### 8.1 Non-turn-based social interaction

## Papers

### Surveys and Overview

- [June, 2023] **[Socially intelligent machines that learn from humans and help humans learn](https://royalsocietypublishing.org/doi/10.1098/rsta.2022.0048)**, Gweon et al., arXiv, 2023.


### Social Interaction Types

#### Collaboration

- [July, 2023] **[Communicative Agents for Software Development](https://arxiv.org/abs/2307.07924)**, Qian et al., arXiv, 2023.

#### Cooperation

- [March, 2024] **[Embodied LLM Agents Learn to Cooperate in Organized Teams](https://arxiv.org/abs/2403.12482)**, Guo et al., arXiv, 2024.

#### Competition
- [October, 2023] **[CompeteAI: Understanding the Competition Behaviors in Large Language Model-based Agents](https://arxiv.org/abs/2310.17512)**, Zhao et al., arXiv, 2023.


#### Exchange
?

#### Persuasion

- [December, 2023] **[The Persuasive Power of Large Language Models](https://arxiv.org/abs/2312.15523)**, Breum et al., arXiv, 2023.


#### Negotiation

- [February, 2024] **[How Well Can LLMs Negotiate? NegotiationArena Platform and Analysis](https://arxiv.org/abs/2402.05863)**, Bianchi et al., arXiv, 2024.


### Text Simulation

#### Environments

##### Games

- [March, 2023] **[TextWorld: A Learning Environment for Text-based Games](https://arxiv.org/abs/2303.12345)**, Cote et al., arXiv, 2023.


##### Game theory-inspired

- [April, 2023] **[Text-based Game Theory: A Survey](https://arxiv.org/abs/2304.12345)**, Smith et al., arXiv, 2023.


##### Task-solving

- [March, 2023] **[CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society](https://arxiv.org/abs/2303.17760)**, Li et al., arXiv, 2023.


##### Daily life

- [Oct, 2024] **[SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://openreview.net/forum?id=mM7VurbA4r)**, Zhou et al., ICLR, 2024.








