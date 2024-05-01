import { PureComponent } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { area_data } from "./data/chartData";
import { Button } from "./ui/button";

type Category = 'Environment' | 'Agents' | 'Evaluation' | 'Other';

interface State {
  activeButton: Category;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];
export default class AreaPlot extends PureComponent<{}, State> {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';
  constructor(props: {}) {
    super(props);
    this.state = {
      activeButton: 'Environment', // Initialize with the first button
    };
  }
 
  // Define data keys for each category
  categoryKeys: Record<Category, string[]> = {
    Environment: ['text', 'virtual', 'embodied', 'robotics'],
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
            <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Environment')}>Environment</Button>
            <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Agents')}>Agents</Button>
            <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Evaluation')}>Evaluation</Button>
            <Button variant="ghost" className="hover:bg-teal-100 font-bold" onClick={() => this.handleButtonClick('Other')}>Other</Button>
        </div>
        <ResponsiveContainer width="100%" height={280}>
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
          <YAxis />
          <Tooltip />
          {keys.map((key: string, index: number) => (
                <Area type="monotone" dataKey={key} stackId="1" stroke={COLORS[index % COLORS.length]} fill={COLORS[index % COLORS.length]} />
            ))}
        </AreaChart>
            </ResponsiveContainer>
        </div>
    );
  }
}