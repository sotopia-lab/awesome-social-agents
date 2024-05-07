import { PureComponent } from "react";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { area_data } from "./data/chartData";
import { Button } from "./ui/button";
import { Category, PlotProps} from './charts-state'

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];
export default class AreaPlot extends PureComponent<PlotProps> {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';
 
  // Define data keys for each category
  categoryKeys: Record<Category, string[]> = {
    Environment: ['text', 'virtual', 'embodied', 'robotics'],
    Agents: ['prompting_and_in_context_learning', 'finetuning', 'reinforcement_learning', 'pretraining'],
    Evaluation: ['qualitative', 'human', 'rule_based', 'model_based'],
    Objective: ['collaboration', 'competition', 'mixed_objectives', 'implicit_objectives'], 
    Other: ['health', 'education', 'policy', 'human_agent'],
  };

  render() {
    const { activeButton, handleButtonClick } = this.props;
    const keys = this.categoryKeys[activeButton];
    return (
    <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-row gap-3 py-4">
            <Button variant="ghost" className={activeButton ==='Environment' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Environment')}>Environment</Button>
            <Button variant="ghost" className={activeButton ==='Agents' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Agents')}>Agents</Button>
            <Button variant="ghost" className={activeButton ==='Evaluation' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Evaluation')}>Evaluation</Button>
            <Button variant="ghost" className={activeButton ==='Objective' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Objective')}>Objective</Button>
            <Button variant="ghost" className={activeButton ==='Other' ? "bg-teal-100 hover:bg-teal-200 font-bold dark:bg-teal-500" : "hover:bg-teal-200 font-bold"} onClick={() => handleButtonClick('Other')}>Other</Button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={300}
          data={area_data}
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
          {keys.map((key: string, index: number) => (
                <Area type="monotone" dataKey={key} stackId="1" stroke={COLORS[index % COLORS.length]} fill={COLORS[index % COLORS.length]} />
            ))}
        </AreaChart>
            </ResponsiveContainer>
        </div>
    );
  }
}