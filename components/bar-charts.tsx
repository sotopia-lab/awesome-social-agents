import React, { PureComponent, useState } from 'react';
import { bar_data } from '@/components/data/chartData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { Button } from '@/components/ui/button';

type Category = 'Objective' | 'Agents' | 'Evaluation' | 'Other' | 'Overall';

interface State {
  activeButton: Category;
}

export default class BarPlot extends PureComponent<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = {
        activeButton: 'Objective', // Initialize with the first button
      };
    }
  
    // Define data keys for each category
    categoryKeys: Record<Category, string[]> = {
      Overall: ['overall'],
      Objective: ['collaboration', 'competition', 'mixed_objectives', 'implicit_objectives'],
      Agents: ['prompting_and_in_context_learning', 'finetuning', 'reinforcement_learning', 'pretraining'],
      Evaluation: ['qualitative', 'human', 'rule_based', 'model_based'],
      Other: ['health', 'education', 'policy', 'human_agent'],
    };
  
    // Function to handle button clicks
    handleButtonClick = (category: Category) => {
      this.setState({ activeButton: category });
    };
  
    render() {
      const { activeButton } = this.state;
      const keys = this.categoryKeys[activeButton];
      return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-row gap-3 py-4">
                <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Objective')}>Objective</Button>
                <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Agents')}>Agents</Button>
                <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Evaluation')}>Evaluation</Button>
                <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Other')}>Other</Button>
                <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Overall')}>Overall</Button>
            </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={bar_data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {keys.map((key: string, index: number) => (
                <Bar key={index} dataKey={key} stackId="a" fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
  }



