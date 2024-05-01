import { LineChart, Line } from 'recharts';
import { render } from "react-dom";
import React from 'react';

import BarPlot from '@/components/bar-charts';
import AreaPlot from '@/components/area-charts';

export default function Charts() {
    return (
        <div className='flex flex-col xl:flex-row gap-10' style={{ width: '80vw', height: '90vh' }}>
        <div className="basis-1/2">
        <BarPlot />
        </div>
        <div className="basis-1/2">
        <AreaPlot />
        </div>
    </div>
    )
}
