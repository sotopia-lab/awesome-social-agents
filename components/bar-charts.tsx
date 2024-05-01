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

   // Define color map for each category
    categoryColors: Record<Category, string[]> = {
      Overall: ['#BC7FCD'],
      Objective: ['#074173', '#1679AB', '#5DEBD7', '#58A399'],
      Agents: ['#948979', '#8DECB4', '#41B06E', '#141E46'],
      Evaluation: ['#5F5D9C', '#6196A6', '#BE7B72', '#FDAF7B'],
      Other: ['#8E7AB5', '#B784B7', '#E493B3', '#EEA5A6'],
    };
  
    // Function to handle button clicks
    handleButtonClick = (category: Category) => {
      this.setState({ activeButton: category });
    };
  
    render() {
      const { activeButton } = this.state;
      const keys = this.categoryKeys[activeButton];
      const colors = this.categoryColors[activeButton];
      return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-row gap-3 py-4">
                <Button variant="ghost" className={activeButton ==='Objective' ? "bg-teal-100 hover:bg-teal-200 font-bold" : "hover:bg-teal-200 font-bold"} onClick={() => this.handleButtonClick('Objective')}>Objective</Button>
                <Button variant="ghost" className={activeButton ==='Agents' ? "bg-teal-100 hover:bg-teal-200 font-bold" : "hover:bg-teal-200 font-bold"} onClick={() => this.handleButtonClick('Agents')}>Agents</Button>
                <Button variant="ghost" className={activeButton ==='Evaluation' ? "bg-teal-100 hover:bg-teal-200 font-bold" : "hover:bg-teal-200 font-bold"} onClick={() => this.handleButtonClick('Evaluation')}>Evaluation</Button>
                <Button variant="ghost" className={activeButton ==='Other' ? "bg-teal-100 hover:bg-teal-200 font-bold" : "hover:bg-teal-200 font-bold"} onClick={() => this.handleButtonClick('Other')}>Other</Button>
                <Button variant="ghost" className={activeButton ==='Overall' ? "bg-teal-100 hover:bg-teal-200 font-bold" : "hover:bg-teal-200 font-bold"} onClick={() => this.handleButtonClick('Overall')}>Overall</Button>
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
                <Bar key={index} dataKey={key} stackId="a" fill={colors[index%colors.length]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
  }



