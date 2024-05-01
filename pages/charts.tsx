import { LineChart, Line } from 'recharts';
import { render } from "react-dom";
import React from 'react';

import BarPlot from '@/components/bar-charts';
import AreaPlot from '@/components/area-charts';
import Link from 'next/link';

export default function Charts() {
    return (
        <div className='flex flex-col xl:flex-row gap-10' style={{ width: '80vw', height: '90vh' }}>
        <div className="basis-1/2 justify-center items-center">
        <BarPlot />
        <div className="antialiased rounded-lg p-5 mx-20">
            <p className="text-md italic bg-slate-100 dark:bg-slate-700 rounded-lg p-3">Paper stats of domains (text, virtual, embodied, robotics) with respect different dimensions (objective, agents, evaluation, other, overall).
            Please check out the <Link href="/taxonomy" className="text-teal-500 font-bold">taxonomy</Link> for more details about dimensions.
                    </p>
            {/* <ul className="list-disc list-inside pl-4 mb-3">
                <li> <span className="font-bold">text agents</span>: non-embodied agents with text-based observation spaces and action spaces, e.g., chatbots </li>
                <li> <span className="font-bold">virtual agents</span>: non-embodied agents with multimodal observation spaces and/or actions spaces, e.g., web agents </li>
                <li> <span className="font-bold">embodied agents</span>: policies that interact with the world through the observation and actions of "bodies" (which also implies ego-centric view). A body typically takes up space and has the ability to influence the environment, e.g., simulated robots/human characters/vehicles in games/3D simulations/2D gridworlds.</li>
                <li><span className="font-bold">robotics</span>: real world embodied agents.</li>
            </ul> */}
        </div>
        </div>
        <div className="basis-1/2">
        <AreaPlot />
        <div className="antialiased rounded-lg p-5 mx-20">
            <p className="text-md italic bg-slate-100 dark:bg-slate-700 rounded-lg p-3">Chronological stats with respect different dimensions (environment, agents, evaluation, other).  
            Please check out the <Link href="/taxonomy" className="text-teal-500 font-bold">taxonomy</Link> for more details about dimensions.
            </p>
            <ul className="list-disc list-inside pl-4 mb-3">
                {/* <li> <span className="font-bold">text agents</span>: non-embodied agents with text-based observation spaces and action spaces, e.g., chatbots </li>
                <li> <span className="font-bold">virtual agents</span>: non-embodied agents with multimodal observation spaces and/or actions spaces, e.g., web agents </li>
                <li> <span className="font-bold">embodied agents</span>: policies that interact with the world through the observation and actions of "bodies" (which also implies ego-centric view). A body typically takes up space and has the ability to influence the environment, e.g., simulated robots/human characters/vehicles in games/3D simulations/2D gridworlds.</li>
                <li><span className="font-bold">robotics</span>: real world embodied agents.</li> */}
            </ul>
        </div>
        </div>
    </div>
    )
}
