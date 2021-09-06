import React, {useState, useEffect} from "react";
import axios from "axios";
import {LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis} from "recharts";

export default function OpenInterestChart({chartData}) {
    return (
        <div className="justify-items-center">
            {/*<p>chart placeholder</p>*/}
            <LineChart
                width={900}
                height={400}
                data={chartData}
                margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
            >
                <YAxis dataKey="price" yAxisId="right" orientation="right" domain={['dataMin', 'dataMax']}/>
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#94dff3" yAxisId="right" dot={false} />
            </LineChart>
            <LineChart
                width={900}
                height={200}
                data={chartData}
                margin={{ top: 0, right: 5, left: 5, bottom: 5 }}
            >
                <XAxis dataKey="date" />
                <YAxis dataKey="oi" yAxisId="right" orientation="right" domain={['dataMin', 'dataMax']}/>
                <Tooltip />
                <Line type="monotone" dataKey="oi" stroke="#ffc8dd" yAxisId="right" dot={false} />
            </LineChart>
        </div>
    );
}