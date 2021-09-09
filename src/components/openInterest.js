import React, {useEffect, useState} from "react";
import OpenInterestCard from "./subcomponents/openInterestCard";
import axios from "axios";

export default function OpenInterest() {

    const [dataOiALL, setDataOiALL] = useState([]);
    const [dataOiEX, setDataOiEX] = useState([]);
    const [chartData, setChartData] = useState([]);

    function updateData() {
        const tokens = ["BTC", "ETH", "LINK", "UNI", "DOT", "SNX", "SUSHI", "BNB", "AAVE", "YFI", "MKR", "SOL", "LTC", "DOGE"];
        // const tokens = ["BTC", "ETH"];
        setDataOiALL([])
        setDataOiEX([])
        setChartData([])
        getDataOi(tokens)

    }

    useEffect(() => {
        updateData()
    }, [])

    function getDataOi(tokens) {
        const prefix = "https://fapi.bybt.com/api/openInterest/pc/info?symbol=";
        const prefixChart = "https://fapi.bybt.com/api/openInterest/v3/chart?symbol=";
        Promise.all(tokens.map(u => axios.get(prefix + u)))
            .then(responses =>
                responses.map(results => {
                        setDataOiALL(oldData => [...oldData, results.data.data[0]])
                        results.data.data.map((result, i) => {
                                if (!(i === 0)) {
                                    setDataOiEX(oldData => [...oldData, result])
                                }
                            }
                        )
                    }
                )
            )
        Promise.all(tokens.map(u => axios.get(prefixChart + u + "&timeType=10&exchangeName=&type=0")))
            .then(responses =>
                responses.map(response => {
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
                                setChartData(oldData => [...oldData, data])
                    // console.log(data)
                    }
                )
            )
        console.log(chartData)
    }

    return (
        <div className="px-4 py-8 rounded-3xl max-w-full text-white bg-custom-bga shadow-inner">
            <h2 className="text-2xl font-medium mb-10 pl-1 md:pl-3">Open Interest</h2>

            <div
                className="flex flex-row items-center py-4 px-4 rounded-b rounded-2xl max-w-full text-white bg-custom-bg border-b border-gray-600 shadow-lg">
                <div
                    className="text-lg font-medium w-full grid grid-flow-col grid-cols-8 justify-items-end justify-self-center justify-between">
                    <p>Data</p>
                    <p>Chart</p>
                    <p>Token</p>
                    <p>OI (USD)</p>
                    <p>OI (Token)</p>
                    <p>1H Change</p>
                    <p>4H Change</p>
                    <p>24H Change</p>
                </div>
            </div>
            {dataOiALL.map((token, index) => (
                <OpenInterestCard key={token.symbol} token={token}
                                  exchangeData={dataOiEX.filter(row => row.symbol === token.symbol)}
                                  chartData={chartData[index]}
                />
            ))}

        </div>
    );
}
