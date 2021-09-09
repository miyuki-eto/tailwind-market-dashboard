import React from "react";
import {LineChart, XAxis, Tooltip, Line, YAxis, ResponsiveContainer} from "recharts";

export default function OpenInterestChart({chartData}) {
    const numberFormatter = item => new Intl.NumberFormat('en').format(item);
    return (
        <div className="justify-items-center">
            <ResponsiveContainer
                className="border-b border-gray-500"
                width="100%"
                height={400}
            >
                <LineChart
                    width={900}
                    height={400}
                    data={chartData}
                    syncId="syncId1"
                    margin={{top: 10, right: 0, left: 0, bottom: 0}}
                >
                    <XAxis dataKey="date" hide={true}/>
                    <YAxis dataKey="price" width={120} yAxisId="right" tickFormatter={numberFormatter} orientation="right" domain={[dataMin => (dataMin * 0.99), dataMax => (dataMax * 1.01)]}/>
                    <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
                    <Line type="monotone" dataKey="price" stroke="#94dff3" yAxisId="right" dot={false}/>
                </LineChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={200}>
                <LineChart
                    width={900}
                    height={200}
                    data={chartData}
                    syncId="syncId1"
                    margin={{top: 0, right: 0, left: 0, bottom: 10}}
                >
                    <XAxis dataKey="date"/>
                    <YAxis dataKey="oi" width={120} yAxisId="right" tickFormatter={numberFormatter} orientation="right" domain={[dataMin => (dataMin * 0.99), dataMax => (dataMax * 1.01)]}/>
                    <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
                    <Line type="monotone" dataKey="oi" stroke="#ffc8dd" yAxisId="right" dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}