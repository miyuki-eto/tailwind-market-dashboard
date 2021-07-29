import React, { useEffect, useState }  from "react";
import OpenInterestCard from "./subcomponents/openInterestCard";
import axios from "axios";

export default function OpenInterest() {

    const [dataOiALL,setDataOiALL] = useState([]);
    const [dataOiEX,setDataOiEX] = useState([]);

    function updateData() {
        const tokens = ["BTC", "ETH", "LINK", "UNI", "DOT", "SNX", "SUSHI", "BNB", "AAVE", "YFI", "MKR", "SOL", "LTC", "DOGE"];
        setDataOiALL([])
        setDataOiEX([])
        tokens.map((token, i) =>
            getDataOi(token)
        )
    }
    useEffect(() => {
        updateData()
    }, [])

    function getDataOi(ticker) {
        const url = 'https://fapi.bybt.com/api/openInterest/pc/info?symbol=' + ticker;
        axios.get(url)
            .then(results => {
                setDataOiALL(oldData => [...oldData, results.data.data[0]])
                results.data.data.map((result, i) => {
                        if (!(i === 0)) {
                            setDataOiEX(oldData => [...oldData, result])
                        }
                    }
                )
            })
    }

    return (
        <div className="px-4 py-8 rounded-3xl max-w-full text-white bg-gray-800 shadow-inner">
            <h2 className="text-2xl font-medium mb-10 pl-1 md:pl-3">Open Interest</h2>

            <table className="table-auto">
                <thead>
                <tr>
                    <th>{" 1"}</th>
                    <th>{" 2"}</th>
                    <th>Symbol</th>
                    <th>Token</th>
                    <th>OI (USD)</th>
                    <th>OI (Token)</th>
                    <th>1H Change</th>
                    <th>4H Change</th>
                    <th>24H Change</th>
                </tr>
                </thead>
                <tbody>
                {dataOiALL.map(token => (
                    <OpenInterestCard key={token.symbol} token={token} exchangeData={dataOiEX.filter(row => row.symbol === token.symbol)}/>
                ))}
                </tbody>
            </table>

            {/*<div className="flex flex-row items-center py-4 px-4 rounded-b rounded-2xl max-w-full text-white bg-gray-900 border-b border-gray-600 shadow-lg">*/}
            {/*    <div*/}
            {/*        className="text-md font-medium w-full grid grid-flow-col grid-cols-7 justify-items-end">*/}
            {/*        <th>{" "}</th>*/}
            {/*        <th>Token</th>*/}
            {/*        <th>OI (USD)</th>*/}
            {/*        <th>OI (Token)</th>*/}
            {/*        <th>1H Change</th>*/}
            {/*        <th>4H Change</th>*/}
            {/*        <th>24H Change</th>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*{dataOiALL.map(token => (*/}
            {/*    <OpenInterestCard key={token.symbol} token={token} exchangeData={dataOiEX.filter(row => row.symbol === token.symbol)}/>*/}
            {/*))}*/}

        </div>
    );
}
