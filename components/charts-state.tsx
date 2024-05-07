
import React, { PureComponent } from 'react';
import BarPlot from './bar-charts'; // Adjust the import path as necessary
import AreaPlot from './area-charts'; // Adjust the import path as necessary
import Link from 'next/link';

export type Category = 'Environment' | 'Agents' | 'Evaluation' | 'Objective' | 'Other';

interface State {
  activeButton: Category;
}

export interface PlotProps {
  activeButton: Category;
  handleButtonClick: (category: Category) => void;
}

class PlotController extends PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeButton: 'Environment', // Shared state
    };
  }

  handleButtonClick = (category: Category) => {
    this.setState({ activeButton: category });
  };

  render() {
    const { activeButton } = this.state;
    return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col xl:flex-row gap-10 w-full h-full mr-13">
        <div className="basis-1/2 justify-center items-center">
        <BarPlot
          activeButton={activeButton}
          handleButtonClick={this.handleButtonClick}
        />
        </div>
        <div className="basis-1/2">
        <AreaPlot
          activeButton={activeButton}
          handleButtonClick={this.handleButtonClick}
        />
          </div>
        </div>
        <p className="text-md italic bg-slate-100 dark:bg-slate-700 rounded-lg p-5 my-4 mx-10 shadow-sm">Paper stats acrosss domains (text, virtual, embodied, robotics) and last 10 years with respect to different dimensions.
        The interpretation of the numbers should be grounded by the nature of non-exhaustive search and onging efforts of adding papers.
        </p>
        <div className="antialiased rounded-lg bg-slate-100 dark:bg-slate-700 p-5 mx-10 shadow-sm">
            <p className="text-md italic rounded-lg p-3">
            TL;DR of the dimensions.        
            Please check out the <Link href="/taxonomy" className="text-teal-500 font-bold">taxonomy</Link> for more details.
            </p>
            <ul className={`list-disc list-inside pl-4 mb-3 ${activeButton === 'Environment' ? 'block' : 'hidden'}`}>
                <li> <span className="font-bold">Text</span>: non-embodied agents perceive and act with texts, e.g., chatbots </li>
                <li> <span className="font-bold">virtual agents</span>: non-embodied agents perceive and act within the virutal environment, e.g., web agents</li>
                <li> <span className="font-bold">embodied agents</span>: agents that interact with the world through the observation and actions of "bodies". e.g., simulated robots/human characters.</li>
                <li> <span className="font-bold">robotics</span>: real world embodied agents.</li>
            </ul>

            <ul className={`list-disc list-inside pl-4 mb-3 ${activeButton === 'Agents' ? 'block' : 'hidden'}`}>
                <li> <span className="font-bold">Note</span>: Here we mainly focus on building agents with neural models.</li>
            </ul>
            <ul className={`list-disc list-inside pl-4 mb-3 ${activeButton === 'Evaluation' ? 'block' : 'hidden'}`}>
                <li> <span className="font-bold">Qualitative</span>: Indicate the evaluation is based on some examples.</li>
                <li> <span className="font-bold">Model-based</span>: Use neural model for end-to-end evaluation.</li>
            </ul>
            <ul className={`list-disc list-inside pl-4 mb-3 ${activeButton === 'Objective' ? 'block' : 'hidden'}`}>
                <li> <span className="font-bold">mixed_objectives</span>: A mixture of collaboration, competition.</li>
                <li> <span className="font-bold">implicit_objectives</span>: No goal/task mentioned explicitly for the social agents (e.g., chit-chat agent; the implied objective is to make users engage.) </li>
            </ul>
            <ul className={`list-disc list-inside pl-4 mb-3 ${activeButton === 'Other' ? 'block' : 'hidden'}`}>
                <li> <span className="font-bold">human_agent</span>: Real humans involved in the interactions.</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default PlotController;

