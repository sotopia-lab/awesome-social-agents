import React, { PureComponent, useState } from 'react';
import { bar_data } from '@/components/data/chartData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { Button } from '@/components/ui/button';
import { Category, PlotProps} from './charts-state'


export default class BarPlot extends PureComponent<PlotProps> {
    // Define data keys for each category
    categoryKeys: Record<Category, string[]> = {
      Environment: ['overall'],
      Objective: ['collaboration', 'competition', 'mixed_objectives', 'implicit_objectives'],
      Agents: ['prompting_and_in_context_learning', 'finetuning', 'reinforcement_learning', 'pretraining'],
      Evaluation: ['qualitative', 'human', 'rule_based', 'model_based'],
      Other: ['health', 'education', 'policy', 'human_agent'],
    };

   // Define color map for each category
    categoryColors: Record<Category, string[]> = {
      Environment: ['#BC7FCD'],
      Objective: ['#074173', '#1679AB', '#5DEBD7', '#58A399'],
      Agents: ['#948979', '#8DECB4', '#41B06E', '#141E46'],
      Evaluation: ['#5F5D9C', '#6196A6', '#BE7B72', '#FDAF7B'],
      Other: ['#8E7AB5', '#B784B7', '#E493B3', '#EEA5A6'],
    };
  
    render() {
      const { activeButton, handleButtonClick } = this.props;
      const keys = this.categoryKeys[activeButton];
      const colors = this.categoryColors[activeButton];
      return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-row gap-3 py-4">
                <Button variant="ghost" className={activeButton ==='Environment' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Environment')}>Overall</Button>
                <Button variant="ghost" className={activeButton ==='Agents' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Agents')}>Agents</Button>
                <Button variant="ghost" className={activeButton ==='Evaluation' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Evaluation')}>Evaluation</Button>
                <Button variant="ghost" className={activeButton ==='Objective' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Objective')}>Objective</Button>
                <Button variant="ghost" className={activeButton ==='Other' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Other')}>Other</Button>
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
              <YAxis label={{ value: '#Papers', angle: -90, position: 'insideLeft' }}/>
              <Tooltip />
              <Legend />
              <defs>
                <linearGradient id="overallGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9599E2" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#8BC6EC" stopOpacity={1}/>
                </linearGradient>
                {/* Define other gradients here if needed */}
              </defs>
              {keys.map((key: string, index: number) => (
                <Bar key={index} dataKey={key} stackId="a" fill={key === 'overall' ? 'url(#overallGradient)' : colors[index % colors.length]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
  }



