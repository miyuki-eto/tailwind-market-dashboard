import React, {useState, useRef} from "react";

// import OpenInterestChart from "./openInterestChart";

export default function OpenInterestCard({token, exchangeData}) {

    const [isOpenTable, setIsOpenTable] = useState(false);
    const [isOpenChart, setIsOpenChart] = useState(false);
    const toggleTable = () => {
        setIsOpenTable(!isOpenTable);
        setIsOpenChart(false);
    };
    const toggleChart = () => {
        setIsOpenChart(!isOpenChart);
        setIsOpenTable(false);
    };

    const Collapse = ({isOpen, children}) => {
        const ref = useRef(null);
        const inlineStyle = isOpen ? {height: ref.current?.scrollHeight} : {height: 0};
        return (
            <div
                className="mt-0 overflow-hidden text-gray-600 transition-height ease duration-1000"
                ref={ref}
                style={inlineStyle}
            >
                {children}
            </div>
        );
    };
    return (
        <div>
            <div
                className="flex flex-row items-center py-1 px-4 max-w-full text-white bg-gray-900 border-b border-gray-600">
                <button className="ml-2 mr-4 focus:outline-none"
                        onClick={toggleTable}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                </button>
                <button
                    className="ml-2 mr-4 focus:outline-none"
                    onClick={toggleChart}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                    </svg>
                </button>

                <div
                    className="text-1xl font-light pl-3 md:pl-6 w-full grid grid-flow-col grid-cols-6 grid-rows-1 gap-4 justify-items-end">
                    <p>{token.symbol}</p>
                    <p>{token.openInterest}</p>
                    <p>{token.openInterestAmount}</p>
                    <p>{token.h1OIChangePercent}</p>
                    <p>{token.h4OIChangePercent}</p>
                    <p>{token.h24Change}</p>
                </div>
            </div>
            <Collapse isOpen={isOpenTable}>
                <div
                    className="text-md font-medium pl-3 md:pl-6 w-full px-4 grid grid-flow-col grid-cols-7 justify-items-end text-white bg-gray-800 ">
                    <p>{" "}</p>
                    <p>Exchange</p>
                    <p>OI (USD)</p>
                    <p>OI (Token)</p>
                    <p>1H Change</p>
                    <p>4H Change</p>
                    <p>24H Change</p>
                </div>
                {exchangeData.map(exchange => (
                    <div
                        className="text-md font-thin pl-3 md:pl-6 w-full px-4 grid grid-flow-col grid-cols-7 justify-items-end text-white bg-gray-800 ">
                        <img style={{height: 16}} src={exchange.exchangeLogo} alt="exchange"/>
                        <p>{exchange.exchangeName}</p>
                        <p>{exchange.openInterest}</p>
                        <p>{exchange.openInterestAmount}</p>
                        <p>{exchange.h1OIChangePercent}</p>
                        <p>{exchange.h4OIChangePercent}</p>
                        <p>{exchange.h24Change}</p>
                    </div>
                ))}
            </Collapse>
            {/*<Collapse isOpen={isOpenChart}>*/}
            {/*    <OpenInterestChart/>*/}
            {/*</Collapse>*/}
        </div>
    );
}
