const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    // Add more objects here if needed
  ];
  

import { LineChart, Line } from 'recharts';
export const renderLineChart = (
<LineChart width={400} height={400} data={data}>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
</LineChart>
);