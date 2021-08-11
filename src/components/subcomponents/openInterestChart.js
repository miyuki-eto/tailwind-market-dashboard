import React, {useState, useEffect} from "react";
import axios from "axios";
import {LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis} from "recharts";

export default function OpenInterestChart({token}) {
    
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        updateData()
    }, [])

    function updateData() {
        getDataChart(token)
    }

    function getDataChart(token) {
        const url = "https://fapi.bybt.com/api/openInterest/v3/chart?symbol=" + token + "&timeType=10&exchangeName=&type=0";
        axios.get(url).then(response => {
            const result = Object.keys(response.data.data.dataMap).reduce(function (r, k) {
                response.data.data.dataMap[k].forEach(function (a, i) {
                    r[i] = (r[i] || 0) + a;
                });
                return r;
            }, []);
            // console.log(result)
            const prices = response.data.data.priceList
            const dates = response.data.data.dateList.map(x => new Date(x).toLocaleTimeString("en-US"))
            const data = result.map((x, i) => ({
                oi: x,
                price: prices[i],
                date: dates[i]
            }));
            setChartData(data)
        })

    }

    return (
        <div>
            {/*<p>chart placeholder</p>*/}
            <LineChart
                width={900}
                height={400}
                data={chartData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="date" />
                <YAxis dataKey="oi" yAxisId="left" domain={['dataMin', 'dataMax']}/>
                <YAxis dataKey="price" yAxisId="right" orientation="right" domain={['dataMin', 'dataMax']}/>
                <Tooltip />
                <Line type="monotone" dataKey="oi" stroke="#ffffff" yAxisId="left" dot={false} />
                <Line type="monotone" dataKey="price" stroke="#777777" yAxisId="right" dot={false} />
            </LineChart>
        </div>
    );
}
