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

*For the best experience, we recommend reading this document on the [website](https://sotopia-lab.github.io/awesome-social-agents/).*

The rise of Large Language Models (LLMs)/foundational models presents new opportunities for simulating complex human **social behaviors**. As a result, there is a rapidly growing body of work emerging in this domain. We hope to categorize and synergize recent efforts to provide a comprehensive guidebook of **social agents** weaving together multiple domains, including language, embodiment, and robotics. 

Our goal is to offer insights crucial for understanding and harnessing **social agents'** potential impact on society. We strive to keep these updated regularly and continuously. **We greatly appreciate any contributions via PRs, issues, emails, or other methods.**

> [!NOTE]
> * **Agent** and **Environment** (Sutton and Barto 2018): An agent is a goal-driven decision-maker that sense and act upon the state of the environment. An environment comprises the state outside the agent, including the other agents if any. 
> * **Social Agent**: An agent that interacts with a multi-agent environment.
> * **Socially Intelligent Agent**: A social agent that interacts and communicates with other agents in a human-interpretable way.
> <details><summary>more notes</summary><ol>
> <li>The social intelligence that we are focusing on is human-like, excluding the collective intelligence in a lot of social animals like ants, bees, fishes. </li> 
> <li>To understand whether an entity is a (social) agent, we have to situate it in an environment. It is not possible to discuss an agent outside of an environment. </li>
> <li>We acknowledge there are many types of definitions for social agents. Our defitions here help narrow down the scope of our survey.</li>

🗂️ *Check out the [examples](examples.md) of social agents.*
📚 *Check out the table format of the collected papers [here](paper_table.md).*

📝 *We are currently working on a survey paper related to content of this repository. Stay tuned for updates!*

## Table of Contents
- [Papers](#papers)
  - [Surveys and Overview](#surveys-and-overview)
  - [Environments](#environments)
    - [Text and Speech Environments](#text-and-speech-environments)
    - [Embodied Environments](#embodied-environments)
    - [Virtual Environments](#virtual-environments)
    - [Robotics](#robotics)
  - [Modeling](#modeling)
    - [In-context Learning](#in-context-learning)
    - [Finetuning](#finetuning)
    - [Reinforcement learning](#reinforcement-learning)
  - [Evaluating social agents](#evaluating-social-agents)
    - [Evaluating text social agents](#evaluating-text-social-agents)
    - [Evaluating embodied social agents](#evaluating-embodied-social-agents)
    - [Evaluating virtual social agents](#evaluating-virtual-social-agents)
    - [Evaluating robotics in social contexts](#evaluating-robotics-in-social-contexts)
  - [Interactions with humans](#interactions-with-humans)
    - [Human-Chatbot Interaction](#human-chatbot-interaction)
    - [Human-Embodied Agent Interaction](#human-embodied-agent-interaction)
    - [Human Robot Interaction](#human-robot-interaction)
    - [Human-Human Interaction](#human-human-interaction)
  - [Challenges](#challenges)
    - [Theory of Mind](#theory-of-mind)
    - [Social Learning](#social-learning)
    - [Simultaneous Interaction](#simultaneous-interaction)
  - [Applications](#applications)
    - [Health](#health)
    - [Policy](#policy)
    - [Education](#education)
  - [Concerns](#concerns)
    - [Risks](#risks)
    - [Safety](#safety)

## Papers
### Surveys and Overview
- [June, 2023] **[Socially intelligent machines that learn from humans and help humans learn](https://royalsocietypublishing.org/doi/10.1098/rsta.2022.0048)**, Gweon et al., arXiv, 2023.

### Environments

#### Text and Speech Environments
[October, 2024] [SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://openreview.net/forum?id=mM7VurbA4r), Xuhui Zhou et al., ICLR

[October, 2023] [CompeteAI: Understanding the Competition Behaviors in Large Language Model-based Agents](https://arxiv.org/abs/2310.17512), Qinlin Zhao et al., arXiv

#### Embodied Environments

#### Virtual Environments

#### Robotics

### Modeling

#### In-context Learning

#### Finetuning

#### Reinforcement learning

### Evaluating social agents

#### Evaluating text social agents
[October, 2024] [SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://openreview.net/forum?id=mM7VurbA4r), Xuhui Zhou et al., ICLR

[October, 2023] [CompeteAI: Understanding the Competition Behaviors in Large Language Model-based Agents](https://arxiv.org/abs/2310.17512), Qinlin Zhao et al., arXiv

[March, 2024] [RoleInteract: Evaluating the Social Interaction of Role-Playing Agents](https://arxiv.org/abs/2403.13679), Hongzhan Chen et al., arXiv

[September, 2023] [Approximating Online Human Evaluation of Social Chatbots with Prompting](https://aclanthology.org/2023.sigdial-1.25), Svikhnushina et al., Proceedings of the 24th Annual Meeting of the Special Interest Group on Discourse and Dialogue

[December, 2023] [CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society](https://proceedings.neurips.cc/paper_files/paper/2023/file/a3621ee907def47c1b952ade25c67698-Paper-Conference.pdf), Guohao Li et al., Advances in Neural Information Processing Systems

[October, 2023] [Llm-based agent society investigation: Collaboration and confrontation in avalon gameplay](https://arxiv.org/pdf/2310.14985.pdf), Yihuai Lan et al., arXiv preprint arXiv:2310.14985

[August, 2023] [CharacterChat: Learning towards Conversational AI with Personalized Social Support](https://arxiv.org/abs/2308.10278), Quan Tu et al., arXiv

[October, 2023] [AgentCF: Collaborative Learning with Autonomous Language Agents for Recommender Systems](https://arxiv.org/abs/2310.09233), Junjie Zhang et al., arXiv

#### Evaluating embodied social agents
[March, 2024] [Embodied LLM Agents Learn to Cooperate in Organized Teams](https://arxiv.org/abs/2403.12482), Xudong Guo et al., arXiv

#### Evaluating virtual social agents

#### Evaluating robotics in social contexts

### Interactions with humans

#### Human-Chatbot Interaction

#### Human-Embodied Agent Interaction

#### Human Robot Interaction

#### Human-Human Interaction

### Challenges

#### Theory of Mind

#### Social Learning

#### Simultaneous Interaction

### Applications

#### Health
[March, 2024] [Polaris: A Safety-focused LLM Constellation Architecture for Healthcare](https://arxiv.org/abs/2403.13313), Subhabrata Mukherjee et al., arXiv

[January, 2024] [Enhancing Diagnostic Accuracy through Multi-Agent Conversations: Using Large Language Models to Mitigate Cognitive Bias](https://arxiv.org/abs/2401.14589), Yu He Ke et al., arXiv

[February, 2024] [Benchmarking Large Language Models on Communicative Medical Coaching: a Novel System and Dataset](https://arxiv.org/abs/2402.05547), Hengguan Huang et al., arXiv

[February, 2024] [AI Hospital: Interactive Evaluation and Collaboration of LLMs as Intern Doctors for Clinical Diagnosis](https://arxiv.org/abs/2402.09742), Zhihao Fan et al., arXiv

[February, 2024] [COCOA: CBT-based Conversational Counseling Agent using Memory Specialized in Cognitive Distortions and Dynamic Prompt](https://arxiv.org/abs/2402.17546), Suyeon Lee et al., arXiv

[May, 2023] [Helping the Helper: Supporting Peer Counselors via AI-Empowered Practice and Feedback](https://arxiv.org/abs/2305.08982), Shang-Ling Hsu et al., arXiv

[May, 2023] [Read, Diagnose and Chat: Towards Explainable and Interactive LLMs-Augmented Depression Detection in Social Media](https://arxiv.org/abs/2305.05138), Wei Qin et al., arXiv

[May, 2023] [An artificial intelligence-based chatbot for prostate cancer education: Design and patient evaluation study](https://pubmed.ncbi.nlm.nih.gov/37152238/), Magdalena Görtz et al., Digital Health

[October, 2024] [Conversational Health Agents: A Personalized LLM-Powered Agent Framework](https://arxiv.org/abs/2310.02374), Mahyar Abbasian et al., arXiv

#### Policy

#### Education

### Concerns

#### Risks

#### Safety







