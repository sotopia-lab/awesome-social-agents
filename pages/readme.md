
<h1>🗣️👥 Awesome Social Agents</h1>
<div class="flex flex-row">
  <a href="https://awesome.re">
    <img src="https://awesome.re/badge.svg" alt="Awesome">
  </a>&nbsp;
  <a href="/contribution">
    <img src="https://img.shields.io/badge/PRs-Welcome-blue" alt="PRs Welcome">
  </a>&nbsp;
  <a href="https://arxiv-coming-soon">
    <img src="https://img.shields.io/badge/arXiv-Coming soon-b31b1b.svg" alt="arXiv">
  </a>
</div>

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
[June, 2023] [Socially intelligent machines that learn from humans and help humans learn](https://royalsocietypublishing.org/doi/10.1098/rsta.2022.0048), Gweon et al., arXiv

### Environments

#### Text and Speech Environments
[October, 2023] [SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents](https://openreview.net/forum?id=mM7VurbA4r), Xuhui Zhou et al., ICLR

[October, 2023] [CompeteAI: Understanding the Competition Behaviors in Large Language Model-based Agents](https://arxiv.org/abs/2310.17512), Qinlin Zhao et al., arXiv

[March, 2022] [Report from the nsf future directions workshop on automatic evaluation of dialog: Research directions and challenges](https://arxiv.org/abs/2203.10012), Shikib Mehri et al., arXiv preprint arXiv:2203.10012

[January, 2022] [Socio-conversational systems: Three challenges at the crossroads of fields](https://pubmed.ncbi.nlm.nih.gov/36591412/), Chlo{\'e} Clavel et al., Frontiers in Robotics and AI

[January, 2022] [The Handbook on Socially Interactive Agents: 20 Years of Research on Embodied Conversational Agents, Intelligent Virtual Agents, and Social Robotics Volume 2: Interactivity, Platforms, Application](https://dl.acm.org/doi/book/10.1145/3477322), Birgit Lugrin et al., ACM

[January, 2022] [Human evaluation of conversations is an open problem: comparing the sensitivity of various methods for evaluating dialogue agents](https://arxiv.org/abs/2201.04723), Eric Michael Smith et al., arXiv preprint arXiv:2201.04723

[November, 2018] [Towards empathetic open-domain conversation models: A new benchmark and dataset](https://arxiv.org/abs/1811.00207), Hannah Rashkin et al., arXiv preprint arXiv:1811.00207

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

[December, 2023] [x{D}ial-Eval: A Multilingual Open-Domain Dialogue Evaluation Benchmark](https://aclanthology.org/2023.findings-emnlp.371), Zhang et al., Findings of the Association for Computational Linguistics: EMNLP 2023

[July, 2023] [Don{'}t Forget Your {ABC}{'}s: Evaluating the State-of-the-Art in Chat-Oriented Dialogue Systems](https://aclanthology.org/2023.acl-long.839), Finch et al., Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)

[May, 2022] [Human Evaluation of Conversations is an Open Problem: comparing the sensitivity of various methods for evaluating dialogue agents](https://aclanthology.org/2022.nlp4convai-1.8), Smith et al., Proceedings of the 4th Workshop on NLP for Conversational AI

[August, 2021] [{D}yna{E}val: Unifying Turn and Dialogue Level Evaluation](https://aclanthology.org/2021.acl-long.441), Zhang et al., Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers)

[January, 2021] [Survey on evaluation methods for dialogue systems](https://link.springer.com/article/10.1007/s10462-020-09866-x), Jan Deriu et al., Artificial Intelligence Review

[July, 2020] [Towards Unified Dialogue System Evaluation: A Comprehensive Analysis of Current Evaluation Protocols](https://aclanthology.org/2020.sigdial-1.29), Finch et al., Proceedings of the 21th Annual Meeting of the Special Interest Group on Discourse and Dialogue

[July, 2020] [u{BLEU}: Uncertainty-Aware Automatic Evaluation Method for Open-Domain Dialogue Systems](https://aclanthology.org/2020.acl-srw.27), Tsuta et al., Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics: Student Research Workshop
 
#### Evaluating embodied social agents

[December, 2022] [Don't Copy the Teacher: Data and Model Challenges in Embodied Dialogue](https://aclanthology.org/2022.emnlp-main.635/), Min et al., EMNLP

[March, 2024] [Embodied LLM Agents Learn to Cooperate in Organized Teams](https://arxiv.org/abs/2403.12482), Xudong Guo et al., arXiv

[Februrary, 2021] [SocNavBench: A Grounded Simulation Testing Framework for Evaluating Social Navigation](https://arxiv.org/abs/2103.00047) Biswas et al., ACM Transactions on Human-Robot Interaction

[January, 2021] [Evaluating the Robustness of Collaborative Agents](https://arxiv.org/abs/2101.05507) Knott et al., AAMAS '21: Proceedings of the 20th International Conference on Autonomous Agents and MultiAgent Systems

#### Evaluating virtual social agents

[January, 2022] [The Artificial-Social-Agent Questionnaire: Establishing the long and short questionnaire versions](https://dl.acm.org/doi/abs/10.1145/3514197.3549612), Siska Fitrianie et al., Proceedings of the 22nd ACM International Conference on Intelligent Virtual Agents

[January, 2021] [Empathy and prosociality in social agents](https://dl.acm.org/doi/10.1145/3477322.3477334), Ana Paiva et al., The Handbook on Socially Interactive Agents: 20 Years of Research on Embodied Conversational Agents, Intelligent Virtual Agents, and Social Robotics Volume 1: Methods, Behavior, Cognition

[February, 2020] [Embedding Conversational Agents into AR: Invisible or with a Realistic Human Body?](https://doi.org/10.1145/3374920.3374956), Jens Reinhardt et al., Proceedings of the Fourteenth International Conference on Tangible, Embedded, and Embodied Interaction

[January, 2020] [The 19 unifying questionnaire constructs of artificial social agents: An iva community analysis](https://dl.acm.org/doi/10.1145/3383652.3423873), Siska Fitrianie et al., Proceedings of the 20th ACM International Conference on Intelligent Virtual Agents

[June, 2019] [Social-iq: A question answering benchmark for artificial social intelligence](https://openaccess.thecvf.com/content_CVPR_2019/html/Zadeh_Social-IQ_A_Question_Answering_Benchmark_for_Artificial_Social_Intelligence_CVPR_2019_paper.html), Amir Zadeh et al., Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition

[May, 2019] [Exploring Virtual Agents for Augmented Reality](https://doi.org/10.1145/3290605.3300511), Isaac Wang et al., CHI

[July, 2018] [Multimodal language analysis in the wild: Cmu-mosei dataset and interpretable dynamic fusion graph](https://aclanthology.org/P18-1208/), AmirAli Bagher Zadeh et al., Proceedings of the 56th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)

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

[October, 2021] [Core elements of social interaction for constructive human-robot interaction](https://arxiv.org/abs/2110.04054), Mike EU Ligthart et al., arXiv preprint arXiv:2110.04054

[August, 2021] [Formalizing and guaranteeing human-robot interaction](https://arxiv.org/abs/2006.16732), Hadas Kress-Gazit et al., Communications of the ACM

[January, 2021] [A taxonomy of social errors in human-robot interaction](https://dl.acm.org/doi/abs/10.1145/3439720), Leimin Tian et al., ACM Transactions on Human-Robot Interaction (THRI)

[January, 2021] [Turn-taking in conversational systems and human-robot interaction: a review](https://www.sciencedirect.com/science/article/pii/S088523082030111X), Gabriel Skantze et al., Computer Speech \& Language

[January, 2020] [Measuring the perceived social intelligence of robots](https://dl.acm.org/doi/abs/10.1145/3415139), Kimberly A Barchard et al., ACM Transactions on Human-Robot Interaction (THRI)

[January, 2017] [Enabling robotic social intelligence by engineering human social-cognitive mechanisms](https://www.sciencedirect.com/science/article/abs/pii/S1389041716300493), Travis J Wiltshire et al., Cognitive Systems Research

#### Human-Human Interaction

[January, 2023] [A Comprehensive Review of Data-Driven Co-Speech Gesture Generation](https://arxiv.org/abs/2301.05339), Simbarashe Nyatsanga et al., Computer Graphics Forum

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

[January, 2023] [Foundation models for generalist medical artificial intelligence](https://www.nature.com/articles/s41586-023-05881-4), Michael Moor et al., Nature

[January, 2022] [Health-related applications of socially interactive agents](https://dl.acm.org/doi/abs/10.1145/3563659.3563672), Timothy Bickmore et al., The Handbook on Socially Interactive Agents: 20 years of Research on Embodied Conversational Agents, Intelligent Virtual Agents, and Social Robotics Volume 2: Interactivity, Platforms, Application

[January, 2021] [Intelligent sensing technologies for the diagnosis, monitoring and therapy of alzheimer’s disease: A systematic review](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8234801/#B23-sensors-21-04249), Nazia Gillani et al., Sensors

[January, 2021] [Patients’ perceptions toward human--artificial intelligence interaction in health care: experimental study](https://www.jmir.org/2021/11/e25856/), Pouyan Esmaeilzadeh et al., Journal of medical Internet research

[January, 2020] [The effectiveness of artificial intelligence conversational agents in health care: systematic review](https://www.jmir.org/2020/10/e20346/PDF), Madison Milne-Ives et al., Journal of medical Internet research

[January, 2019] [Artificial intelligence in healthcare robots: A social informatics study of knowledge embodiment](https://asistdl.onlinelibrary.wiley.com/doi/pdf/10.1002/asi.24145?casa_token=T2fVrVRwmt0AAAAA:IT7GOCcygCdBuckrO5UqRg0hlWXOU3YUx1UPqi2kVG8XxxQfNxMDY6JBm5Kcz1XuO5Xsjo9H7KzCOOv-), Loo G Pee et al., Journal of the Association for Information Science and Technology

#### Policy
[August, 2022] [Social Simulacra: Creating Populated Prototypes for Social Computing Systems](https://doi.org/10.1145/3526113.3545616), Joon Sung Park et al., Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology

[November, 2024] [Do LLMs exhibit human-like response biases? A case study in survey design](https://arxiv.org/abs/2311.04076), Lindia Tjuatja et al., arXiv

[February, 2024] [Large language models cannot replace human participants because they cannot portray identity groups](https://arxiv.org/abs/2402.01908), Angelina Wang et al., arXiv

[February, 2024] [Unveiling the Truth and Facilitating Change: Towards Agent-based Large-scale Social Movement Simulation](https://arxiv.org/abs/2402.16333), Xinyi Mou et al., arXiv

[March, 2024] [From Skepticism to Acceptance: Simulating the Attitude Dynamics Toward Fake News](https://arxiv.org/abs/2403.09498), Yuhan Liu et al., arXiv                

#### Education

[January, 2023] [AI for Students with Learning Disabilities: A Systematic Review](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4617715), Xiaoming Zhai et al., n/a

### Concerns

#### Risks
[2, 2024] [The potential of generative AI for personalized persuasion at scale](https://www.nature.com/articles/s41598-024-53755-0), SC Matz et al., Scientific Reports

[2, 2024] [Jailbroken: How does llm safety training fail?](https://proceedings.neurips.cc/paper_files/paper/2023/file/fd6613131889a4b656206c50a8bd7790-Paper-Conference.pdf), Alexander Wei et al., Advances in Neural Information Processing Systems

[01, 2024] [Two Types of AI Existential Risk: Decisive and Accumulative](https://arxiv.org/abs/2401.07836), Atoosa Kasirzadeh et al., arXiv

[12, 2023] [Llama guard: Llm-based input-output safeguard for human-ai conversations](https://arxiv.org/abs/2312.06674), Hakan Inan et al., arXiv preprint arXiv:2312.06674

[9, 2023] [The rise and potential of large language model based agents: A survey](https://arxiv.org/abs/2309.07864), Zhiheng Xi et al., arXiv preprint arXiv:2309.07864

[7, 2023] [Voice in the machine: Ethical considerations for language-capable robots](https://dl.acm.org/doi/fullHtml/10.1145/3604632), Tom Williams et al., Communications of the ACM

[03, 2023] [Artificial Influence: An Analysis Of AI-Driven Persuasion](https://arxiv.org/abs/2303.08721), Matthew Burtell et al., arXiv

[10, 2022] ["Playing God": How the Metaverse Will Challenge Our Very Notion of Free Will](https://bigthink.com/the-future/playing-god-metaverse-mind-control-free-will/), Louis Rosenberg et al., Big Think

[9, 2022] [Risk and Exposure of XAI in Persuasion and Argumentation: The case of Manipulation](https://link.springer.com/chapter/10.1007/978-3-031-15565-9_13), Rachele Carli et al., International Workshop on Explainable, Transparent Autonomous Agents and Multi-Agent Systems

[12, 2021] [Risks from AI Persuasion](https://www.alignmentforum.org/posts/5cWtwATHL6KyzChck/risks-from-ai-persuasion), Beth Barnes et al., AI Alignment Forum

[12, 2021] [Good robots, bad robots: Morally valenced behavior effects on perceived mind, morality, and trust](https://link.springer.com/article/10.1007/s12369-020-00692-3), Jaime Banks et al., International Journal of Social Robotics

[6, 2021] [Bad machines corrupt good morals](https://www.nature.com/articles/s41562-021-01128-2), Nils K{\"o}bis et al., Nature Human Behaviour

[3, 2021] [On the dangers of stochastic parrots: Can language models be too big?🦜](https://dl.acm.org/doi/pdf/10.1145/3442188.3445922?utm_source=miragenews&utm_medium=miragenews&utm_campaign=news), Emily M Bender et al., Proceedings of the 2021 ACM conference on fairness, accountability, and transparency

[02, 2021] [The corruptive force of AI-generated advice](https://arxiv.org/abs/2102.07536), Margarita Leib et al., arXiv

[11, 2020] [Persuasion Tools: AI Takeover Without AGI or Agency?](https://www.alignmentforum.org/posts/qKvn7rxP2mzJbKfcA/persuasion-tools-ai-takeover-without-agi-or-agency), Daniel Kokotajlo et al., AI Alignment Forum

[9, 2020] [Realtoxicityprompts: Evaluating neural toxic degeneration in language models](https://aclanthology.org/2020.findings-emnlp.301.pdf), Samuel Gehman et al., arXiv preprint arXiv:2009.11462

[2, 2020] [Artificial intelligence crime: An interdisciplinary analysis of foreseeable threats and solutions](https://link.springer.com/article/10.1007/s11948-018-00081-0), Thomas C King et al., Science and engineering ethics

[3, 2019] [Language-capable robots may inadvertently weaken human moral norms](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8673123), Ryan Blake Jackson et al., 2019 14th ACM/IEEE International Conference on Human-Robot Interaction (HRI)

[12, 2011] [13 The inherent dangers of unidirectional emotional bonds between humans and social robots](https://www.researchgate.net/profile/Matthias-Scheutz/publication/255701465_The_Inherent_Dangers_of_Unidirectional_Emotional_Bonds_between_Humans_and_Social_Robots/links/5832333408ae102f0733881e/The-Inherent-Dangers-of-Unidirectional-Emotional-Bonds-between-Humans-and-Social-Robots.pdf), Matthias Scheutz et al., Robot ethics: The ethical and social implications of robotics

[8, 2004] [On the morality of artificial agents](https://link.springer.com/content/pdf/10.1023/B:MIND.0000035461.63578.9d.pdf), Luciano Floridi et al., Minds and machines

#### Safety
[04, 2024] [Frontier AI Ethics: Anticipating and Evaluating the Societal Impacts of Generative Agents](https://api.semanticscholar.org/CorpusID:269033095), Seth Lazar et al., arXiv

[1, 2024] [Deception and Manipulation in Generative AI](https://api.semanticscholar.org/CorpusID:267068787), Christian Tarsney et al., ArXiv

[10, 2023] [Towards Understanding Sycophancy in Language Models](https://api.semanticscholar.org/CorpusID:264405698), Mrinank Sharma et al., ArXiv

[09, 2023] [Identifying the Risks of LM Agents with an LM-Emulated Sandbox](https://arxiv.org/abs/2309.15817), Yangjun Ruan et al., arXiv

[8, 2023] [AI Deception: A Survey of Examples, Risks, and Potential Solutions](https://api.semanticscholar.org/CorpusID:261276587), Peter S. Park et al., ArXiv

[06, 2023] [An Overview of Catastrophic AI Risks](https://arxiv.org/abs/2306.12001), Dan Hendrycks et al., arXiv

[5, 2023] [Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting](https://api.semanticscholar.org/CorpusID:258556812), Miles Turpin et al., ArXiv

[12, 2022] [Understanding Stereotypes in Language Models: Towards Robust Measurement and Zero-Shot Debiasing](https://api.semanticscholar.org/CorpusID:254926728), Justus Mattern et al., ArXiv

[12, 2022] [Constitutional AI: Harmlessness from AI Feedback](https://api.semanticscholar.org/CorpusID:254823489), Yuntao Bai et al., ArXiv

[6, 2022] [Predictability and surprise in large generative models](https://dl.acm.org/doi/pdf/10.1145/3531146.3533229), Deep Ganguli et al., Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency

[3, 2022] [Teaching language models to support answers with verified quotes](https://arxiv.org/pdf/2203.11147.pdf), Jacob Menick et al., arXiv preprint arXiv:2203.11147

[12, 2021] [Ethical and social risks of harm from language models](https://arxiv.org/abs/2112.04359), Laura Weidinger et al., arXiv preprint arXiv:2112.04359

[10, 2021] [Can machines learn morality? the delphi experiment](https://arxiv.org/pdf/2110.07574.pdf), Liwei Jiang et al., arXiv preprint arXiv:2110.07574

[9, 2021] [Truthfulqa: Measuring how models mimic human falsehoods](https://arxiv.org/pdf/2109.07958.pdf), Stephanie Lin et al., arXiv preprint arXiv:2109.07958

[6, 2021] [Towards Understanding and Mitigating Social Biases in Language Models](https://api.semanticscholar.org/CorpusID:235623756), Paul Pu Liang et al., International Conference on Machine Learning

[10, 2020] [Aligning ai with shared human values](https://arxiv.org/pdf/2008.02275.pdf), Dan Hendrycks et al., arXiv preprint arXiv:2008.02275

[10, 2020] [Recipes for safety in open-domain chatbots](https://arxiv.org/pdf/2010.07079.pdf), Jing Xu et al., arXiv preprint arXiv:2010.07079

[9, 2020] [Measuring massive multitask language understanding](https://arxiv.org/pdf/2009.03300.pdf?trk=public_post_comment-text), Dan Hendrycks et al., arXiv preprint arXiv:2009.03300

[12, 2018] [Ethical challenges in data-driven dialogue systems](https://dl.acm.org/doi/10.1145/3278721.3278723), Peter Henderson et al., Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society







