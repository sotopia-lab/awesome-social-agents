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

## Installation
This repo supports Python 3.9 and above. In one line, to use a virtual environment, e.g. with anaconda3: 

`conda create -n awsome-social-agents python=3.9; conda activate awsome-social-agents; python -m install requirements.txt`

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
[June, 2023] [Socially intelligent machines that learn from humans and help humans learn](https://royalsocietypublishing.org/doi/10.1098/rsta.2022.0048), Gweon et al., arXiv

### Environments

#### Text and Speech Environments
[October, 2023] [SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://openreview.net/forum?id=mM7VurbA4r), Xuhui Zhou et al., ICLR

[October, 2023] [CompeteAI: Understanding the Competition Behaviors in Large Language Model-based Agents](https://arxiv.org/abs/2310.17512), Qinlin Zhao et al., arXiv

#### Embodied Environments

[October, 2023] [Habitat 3.0: A Co-Habitat for Humans, Avatars and Robots](https://arxiv.org/abs/2310.13724), Puig et al., ICLR

[September, 2020] [SEAN: Social Environment for Autonomous Navigation](https://arxiv.org/pdf/2009.04300.pdf), Tsoi et al., HAI


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

[March, 2024] [RoleInteract: Evaluating the Social Interaction of Role-Playing Agents](https://arxiv.org/abs/2403.13679), Hongzhan Chen et al., arXiv

[September, 2023] [Approximating Online Human Evaluation of Social Chatbots with Prompting](https://aclanthology.org/2023.sigdial-1.25), Svikhnushina et al., Proceedings of the 24th Annual Meeting of the Special Interest Group on Discourse and Dialogue

[December, 2023] [CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society](https://proceedings.neurips.cc/paper_files/paper/2023/file/a3621ee907def47c1b952ade25c67698-Paper-Conference.pdf), Guohao Li et al., Advances in Neural Information Processing Systems

[October, 2023] [Llm-based agent society investigation: Collaboration and confrontation in avalon gameplay](https://arxiv.org/pdf/2310.14985.pdf), Yihuai Lan et al., arXiv preprint arXiv:2310.14985

[August, 2023] [CharacterChat: Learning towards Conversational AI with Personalized Social Support](https://arxiv.org/abs/2308.10278), Quan Tu et al., arXiv

[October, 2023] [AgentCF: Collaborative Learning with Autonomous Language Agents for Recommender Systems](https://arxiv.org/abs/2310.09233), Junjie Zhang et al., arXiv

[March, 2024] [How Far Are We on the Decision-Making of LLMs? Evaluating LLMs' Gaming Ability in Multi-Agent Environments](https://arxiv.org/abs/2403.11807), Jen-tse Huang et al., arXiv 

[August, 2023] [ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate](https://arxiv.org/abs/2308.07201), Chi-Min Chan et al., arXiv

[February, 2024] [Automatic Evaluation for Mental Health Counseling using LLMs](https://arxiv.org/abs/2402.11958), Anqi Li et al., arXiv 

[February, 2024] [How Well Can LLMs Negotiate? NegotiationArena Platform and Analysis](https://arxiv.org/abs/2402.05863), Federico Bianchi et al., arXiv

[May, 2023] [PersonaLLM: Investigating the Ability of Large Language Models to Express Personality Traits](https://api.semanticscholar.org/CorpusID:268032940), Hang Jiang et al., NAACL Findings  

[February, 2024] [Can Large Language Model Agents Simulate Human Trust Behaviors?](https://api.semanticscholar.org/CorpusID:267523076), Chengxing Xie et al., ArXiv

[January, 2024] [LLM Harmony: Multi-Agent Communication for Problem Solving](https://api.semanticscholar.org/CorpusID:266725580), Sumedh Rasal et al., ArXiv

[November, 2021] [A Comprehensive Assessment of Dialog Evaluation Metrics](https://aclanthology.org/2021.eancs-1.3), Yeh et al., The First Workshop on Evaluations and Assessments of Neural Conversation Systems

[July, 2020] [{C}onvo{K}it: A Toolkit for the Analysis of Conversations](https://aclanthology.org/2020.sigdial-1.8), Chang et al., Proceedings of the 21th Annual Meeting of the Special Interest Group on Discourse and Dialogue

[May, 2023] [Psychological Metrics for Dialog System Evaluation](https://arxiv.org/abs/2305.14757), Salvatore Giorgi et al., arXiv

[May, 2023] [ACCENT: An Automatic Event Commonsense Evaluation Metric for Open-Domain Dialogue Systems](https://arxiv.org/pdf/2305.07797), Sarik Ghazarian et al., arXiv

[November, 2020] [{GRADE}: Automatic Graph-Enhanced Coherence Metric for Evaluating Open-Domain Dialogue Systems](https://aclanthology.org/2020.emnlp-main.742), Huang et al., Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)

[July, 2020] [Unsupervised Evaluation of Interactive Dialog with {D}ialo{GPT}](https://aclanthology.org/2020.sigdial-1.28), Mehri et al., Proceedings of the 21th Annual Meeting of the Special Interest Group on Discourse and Dialogue
 
#### Evaluating embodied social agents

[December, 2022] [Don't Copy the Teacher: Data and Model Challenges in Embodied Dialogue](https://aclanthology.org/2022.emnlp-main.635/), Min et al., EMNLP

[March, 2024] [Embodied LLM Agents Learn to Cooperate in Organized Teams](https://arxiv.org/abs/2403.12482), Xudong Guo et al., arXiv

[Februrary, 2021] [SocNavBench: A Grounded Simulation Testing Framework for Evaluating Social Navigation](https://arxiv.org/abs/2103.00047) Biswas et al., ACM Transactions on Human-Robot Interaction

[January, 2021] [Evaluating the Robustness of Collaborative Agents](https://arxiv.org/abs/2101.05507) Knott et al., AAMAS '21: Proceedings of the 20th International Conference on Autonomous Agents and MultiAgent Systems




#### Evaluating virtual social agents

#### Evaluating robotics in social contexts
[March, 2024] [HumanoidBench: Simulated Humanoid Benchmark for Whole-Body Locomotion and Manipulation](https://arxiv.org/abs/2403.10506), Carmelo Sferrazza et al., arXiv

[December, 2020] [Optimization of criterion for objective evaluation of HRI performance that approximates subjective evaluation: a case study in robot competition](https://doi.org/10.1080/01691864.2019.1698462), Y. Mizuchi et al., Advanced Robotics

[July, 2020] [Safety bounds in human robot interaction: A survey](https://www.sciencedirect.com/science/article/pii/S0925753520300643), Angeliki Zacharaki et al., Safety science

[December, 2015] [RoboCup@ Home: Analysis and results of evolving competitions for domestic and service robots](https://www.sciencedirect.com/science/article/pii/S0004370215001174), Luca Iocchi et al., Artificial Intelligence

[October, 2011] [A meta-analysis of factors affecting trust in human-robot interaction](https://journals.sagepub.com/doi/10.1177/0018720811417254), Peter A Hancock et al., Human factors

[November, 2009] [Measurement instruments for the anthropomorphism, animacy, likeability, perceived intelligence, and perceived safety of robots](https://link.springer.com/article/10.1007/s12369-008-0001-3), Christoph Bartneck et al., International journal of social robotics

[March, 2006] [Common metrics for human-robot interaction](https://doi.org/10.1145/1121241.1121249), Aaron Steinfeld et al., Proceedings of the 1st ACM SIGCHI/SIGART Conference on Human-Robot Interaction

[January, 2003] [Theory and evaluation of human robot interactions](https://ieeexplore.ieee.org/document/1174284), J. Scholtz et al., 36th Annual Hawaii International Conference on System Sciences, 2003. Proceedings of the  

### Interactions with humans

#### Human-Chatbot Interaction
[April, 2023] [Collaborating with a Text-Based Chatbot: An Exploration of Real-World Collaboration Strategies Enacted during Human-Chatbot Interactions](https://dl.acm.org/doi/pdf/10.1145/3544548.3580995), Amon Rapp et al., Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems

[March, 2024] [AI Comes Out of the Closet: Using AI-Generated Virtual Characters to Help Individuals Practice LGBTQIA+ Advocacy](https://dl.acm.org/doi/pdf/10.1145/3640543.3645213), Daniel Pillis et al., Proceedings of the 29th International Conference on Intelligent User Interfaces

[April, 2023] [Exploring effects of chatbot-based social contact on reducing mental illness stigma](https://dl.acm.org/doi/pdf/10.1145/3544548.3581384), Yi-Chieh Lee et al., Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems

[May, 2024] [" It's the only thing I can trust": Envisioning Large Language Model Use by Autistic Workers for Communication Assistance](https://arxiv.org/pdf/2403.03297.pdf), JiWoong Jang et al., Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems

[April, 2022] [User perceptions of extraversion in chatbots after repeated use](https://dl.acm.org/doi/pdf/10.1145/3491102.3502058), Sarah Theres V{\"o}lkel et al., Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems

[September, 2022] [Interacting with a chatbot-based advising system: Understanding the effect of chatbot personality and user gender on behavior](https://www.mdpi.com/2227-9709/9/4/81), Mohammad Amin Kuhail et al., Informatics

[May, 2023] [The Effects of Engaging and Affective Behaviors of Virtual Agents in Group Decision-Making](https://arxiv.org/pdf/2308.10385.pdf), Hanseob Kim et al., Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems

[March, 2024] [Take It, Leave It, or Fix It: Measuring Productivity and Trust in Human-AI Collaboration](https://dl.acm.org/doi/pdf/10.1145/3640543.3645198), Crystal Qian et al., Proceedings of the 29th International Conference on Intelligent User Interfaces

#### Human-Embodied Agent Interaction

[January, 2023] [NOPA: Neurally-guided Online Probabilistic Assistance for Building Socially Intelligent Home Assistants](https://arxiv.org/pdf/2301.05223.pdf), Puig et al.,  ICRA 

[Januaray, 2021] [WATCH-AND-HELP: A CHALLENGE FOR SOCIAL PERCEPTION AND HUMAN-AI COLLABORATION](https://arxiv.org/pdf/2010.09890.pdf), Puig et al., ICLR

[October, 2019] [On the utility of learning about humans for human-ai coordination](https://arxiv.org/pdf/1910.05789.pdf), Carroll et al., Neurips

[May, 2021] [Interaction Flexibility in Artificial Agents Teaming with Human](https://escholarship.org/uc/item/9ks6n70q), Nalepka et al., Proceedings of the Annual Meeting of the Cognitive Science Society

[December, 2023] [LLM-Powered Hierarchical Language Agent for Real-time Human-AI Coordination](https://arxiv.org/abs/2312.15224), Liu et al., arxiv 

[May, 2023] [Adaptive coordination in social embodied rearrangement](https://arxiv.org/abs/2306.00087), Szot et al., ICML

[April, 2023] [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442), Park et al., UIST

[December, 2023] [Diverse Conventions for Human-AI Collaboration](https://proceedings.neurips.cc/paper_files/paper/2023/file/4818263715b25dc137d393af8af6d2fc-Paper-Conference.pdf), Bidipta Sarkar et al., Advances in Neural Information Processing Systems

#### Human Robot Interaction

[March, 2024] [Generative expressive robot behaviors using large language models](https://arxiv.org/abs/2401.14673), Karthik Mahadevan et al., Proceedings of the 2024 ACM/IEEE International Conference on Human-Robot Interaction

[October, 2023] [Eureka: Human-level reward design via coding large language models](https://arxiv.org/abs/2310.12931), Yecheng Jason Ma et al., arXiv preprint arXiv:2310.12931

[August, 2023] [Gesture-informed robot assistance via foundation models](https://arxiv.org/abs/2309.02721), Li-Heng Lin et al., 7th Annual Conference on Robot Learning

[July, 2023] [Open problems and fundamental limitations of reinforcement learning from human feedback](https://arxiv.org/abs/2307.15217), Stephen Casper et al., arXiv preprint arXiv:2307.15217

[July, 2023] [Robots that ask for help: Uncertainty alignment for large language model planners](https://arxiv.org/abs/2307.01928), Allen Z Ren et al., arXiv preprint arXiv:2307.01928

[June, 2023] [Language to rewards for robotic skill synthesis](https://arxiv.org/abs/2306.08647), Wenhao Yu et al., arXiv preprint arXiv:2306.08647

[March, 2023] [No, to the right: Online language corrections for robotic manipulation via shared autonomy](https://arxiv.org/abs/2301.02555), Yuchen Cui et al., Proceedings of the 2023 ACM/IEEE International Conference on Human-Robot Interaction

[March, 2023] [In-Mouth Robotic Bite Transfer with Visual and Haptic Sensing](https://arxiv.org/abs/2211.12705), Lorenzo Shaikewitz et al., International Conference on Robotics and Automation (ICRA)

[March, 2023] [Few-shot preference learning for human-in-the-loop rl](https://arxiv.org/abs/2212.03363), Donald Joseph Hejna III et al., Conference on Robot Learning

[August, 2021] [Formalizing and guaranteeing human-robot interaction](https://arxiv.org/abs/2006.16732), Hadas Kress-Gazit et al., Communications of the ACM

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
[August, 2022] [Social Simulacra: Creating Populated Prototypes for Social Computing Systems](https://doi.org/10.1145/3526113.3545616), Joon Sung Park et al., Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology

[November, 2024] [Do LLMs exhibit human-like response biases? A case study in survey design](https://arxiv.org/abs/2311.04076), Lindia Tjuatja et al., arXiv

[February, 2024] [Large language models cannot replace human participants because they cannot portray identity groups](https://arxiv.org/abs/2402.01908), Angelina Wang et al., arXiv

[February, 2024] [Unveiling the Truth and Facilitating Change: Towards Agent-based Large-scale Social Movement Simulation](https://arxiv.org/abs/2402.16333), Xinyi Mou et al., arXiv

[March, 2024] [From Skepticism to Acceptance: Simulating the Attitude Dynamics Toward Fake News](https://arxiv.org/abs/2403.09498), Yuhan Liu et al., arXiv                

#### Education

### Concerns

#### Risks

#### Safety







