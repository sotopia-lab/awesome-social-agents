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
 [December, 2023] [RoboTube: Learning Household Manipulation from Human Videos with Simulated Twin Environments](https://proceedings.mlr.press/v205/xiong23a.html), Haoyu Xiong et al., Proceedings of The 6th Conference on Robot Learning 

[August, 2022] [Do As I Can and Not As I Say: Grounding Language in Robotic Affordances](https://say-can.github.io/), Michael Ahn et al., arXiv preprint arXiv:2204.01691         
                                                         
[June, 2022] [Inner Monologue: Embodied Reasoning through Planning with Language Models](https://arxiv.org/abs/2207.05608), Wenlong Huang et al., arXiv preprint arXiv:2207.05608                    
                                      
[June, 2023] [One Policy to Dress Them All: Learning to Dress People with Diverse Poses and Garments](https://arxiv.org/abs/2306.12372), Yufei Wang et al., Robotics: Science and Systems (RSS)        
                                    
[August, 2023] [Co-GAIL: Learning Diverse Strategies for Human-Robot Collaboration](https://arxiv.org/abs/2108.06038), Chen Wang et al., arXiv                                                 
                                            
[March, 2024] [Yell At Your Robot: Improving On-the-Fly from Language Corrections](https://arxiv.org/abs/2403.12910), Lucy Xiaoyang Shi et al., arXiv                                   
                                                  
[April, 2016] [Human--robot interaction: status and challenges](https://journals.sagepub.com/doi/10.1177/0018720816644364), Thomas B Sheridan et al., Human factors             
                                                           
[June, 2021] [A taxonomy to structure and analyze human--robot interaction](https://link.springer.com/article/10.1007/s12369-020-00666-5), Linda Onnasch et al., International Journal of Social Robotics         
                         
[July, 2023] [Robotic vision for human-robot interaction and collaboration: A survey and systematic review](https://arxiv.org/abs/2307.15363), Nicole Robinson et al., ACM Transactions on Human-Robot Interaction         
                
[October, 2022] [A survey of multi-agent Human--Robot Interaction systems](https://arxiv.org/abs/2212.05286), Abhinav Dahiya et al., Robotics and Autonomous Systems                                             
                          
[March, 2023] [Nonverbal Cues in Human Robot Interaction: A Communication Studies Perspective](https://doi.org/10.1145/3570169), Jacqueline Urakami et al., J. Hum.-Robot Interact.               
                                         
 [April, 2023] [15 Years of (Who)man Robot Interaction: Reviewing the H in Human-Robot Interaction](https://doi.org/10.1145/3571718), Katie Winkle et al., J. Hum.-Robot Interact.                           
                                

### Modeling

#### In-context Learning
[May, 2023] [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291), Guanzhi Wang et al., arXiv
                                                                                                                                        
 [March, 2023] [Language Models can Solve Computer Tasks](https://arxiv.org/abs/2303.17491), Geunwoo Kim et al., arXiv                                                                                                                                                               

[September, 2024] [LASER: LLM Agent with State-Space Exploration for Web Navigation](https://arxiv.org/abs/2309.08172), Kaixin Ma et al., arXiv                                                                                                                                      

[May, 2023] [Hierarchical Prompting Assists Large Language Model on Web Navigation](https://arxiv.org/abs/2305.14257), Abishek Sridhar et al., arXiv                                                                                                                                

[January, 2024] [Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control](https://openreview.net/forum?id=Pc8AU1aF5e), Longtao Zheng et al., The Twelfth International Conference on Learning Representations                                                    

[November, 2023] [AdaPlanner: Adaptive Planning from Feedback with Language Models](https://openreview.net/forum?id=rnKgbKmelt), Haotian Sun et al., Thirty-seventh Conference on Neural Information Processing Systems                                                             

[May, 2023] [SPRING: Studying the Paper and Reasoning to Play Games](https://arxiv.org/abs/2305.15486), Yue Wu et al., arXiv                                                                                                                                                        

[March, 2023] [DERA: Enhancing Large Language Model Completions with Dialog-Enabled Resolving Agents](https://arxiv.org/abs/2303.17071), Varun Nair et al., arXiv                                                                                                                   

#### Finetuning

[October, 2023] [Understanding HTML with Large Language Models](https://arxiv.org/abs/2210.03945), Izzeddin Gur et al., arXiv                                                                                                                                                       
[
May, 2023] [Instruction-Finetuned Foundation Models for Multimodal Web Navigation](https://openreview.net/forum?id=oLc9sGOBbc), Hiroki Furuta et al., ICLR 2023 Workshop on Mathematical and Empirical Understanding of Foundation Models                                          

[October, 2023] [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629), Shunyu Yao et al., arXiv                                                                                                                                            

[January, 2024] [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://openreview.net/forum?id=9JQtrumvg8), Izzeddin Gur et al., The Twelfth International Conference on Learning Representations                                         

[November, 2023] [From Pixels to {UI} Actions: Learning to Follow Instructions via Graphical User Interfaces](https://openreview.net/forum?id=3PjCt4kmRx), Peter Shaw et al., Thirty-seventh Conference on Neural Information Processing Systems                       

 [January, 2024] [GPT-4V(ision) is a Generalist Web Agent, if Grounded](https://arxiv.org/abs/2401.01614), Boyuan Zheng et al., arXiv                                                                                                                                                

[February, 2024] [Dual-View Visual Contextualization for Web Navigation](https://arxiv.org/abs/2402.04476), Jihyung Kil et al., arXiv           

#### Reinforcement learning

### Evaluating social agents

#### Evaluating text social agents
[October, 2024] [SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://openreview.net/forum?id=mM7VurbA4r), Xuhui Zhou et al., ICLR

[October, 2023] [CompeteAI: Understanding the Competition Behaviors in Large Language Model-based Agents](https://arxiv.org/abs/2310.17512), Qinlin Zhao et al., arXiv

#### Evaluating embodied social agents
[March, 2024] [Embodied LLM Agents Learn to Cooperate in Organized Teams](https://arxiv.org/abs/2403.12482), Xudong Guo et al., arXiv

#### Evaluating virtual social agents

#### Evaluating robotics in social contexts
[March, 2024] [Embodied LLM Agents Learn to Cooperate in Organized Teams](https://arxiv.org/abs/2403.12482), Xudong Guo et al., arXiv                                                                                                                                               |
[March, 2024] [HumanoidBench: Simulated Humanoid Benchmark for Whole-Body Locomotion and Manipulation](https://arxiv.org/abs/2403.10506), Carmelo Sferrazza et al., arXiv                                                                                                            [January, 2003] [Theory and evaluation of human robot interactions](https://ieeexplore.ieee.org/document/1174284), J. Scholtz et al., 36th Annual Hawaii International Conference on System Sciences, 2003. Proceedings of the                                                      [March, 2006] [Common metrics for human-robot interaction](https://doi.org/10.1145/1121241.1121249), Aaron Steinfeld et al., Proceedings of the 1st ACM SIGCHI/SIGART Conference on Human-Robot Interaction                                                                         [July, 2020] [Safety bounds in human robot interaction: A survey](https://www.sciencedirect.com/science/article/pii/S0925753520300643), Angeliki Zacharaki et al., Safety science                                                                                                   [October, 2011] [A meta-analysis of factors affecting trust in human-robot interaction](https://journals.sagepub.com/doi/10.1177/0018720811417254), Peter A Hancock et al., Human factors                                                                                           [November, 2009] [Measurement instruments for the anthropomorphism, animacy, likeability, perceived intelligence, and perceived safety of robots](https://link.springer.com/article/10.1007/s12369-008-0001-3), Christoph Bartneck et al.,  [December, 2015] [RoboCup@ Home: Analysis and results of evolving competitions for domestic and service robots](https://www.sciencedirect.com/science/article/pii/S0004370215001174), Luca Iocchi et al., Artificial Intelligence                                                   [December, 2020] [Optimization of criterion for objective evaluation of HRI performance that approximates subjective evaluation: a case study in robot competition](https://doi.org/10.1080/01691864.2019.1698462), Y. Mizuchi et al., Advanced Robotics  

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

#### Policy

#### Education

### Concerns

#### Risks

#### Safety







