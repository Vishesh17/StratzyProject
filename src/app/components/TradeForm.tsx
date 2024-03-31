"use client";
import React from "react";
import { useState } from "react";

type OptionType = string | null;

const TradeForm = () => {
  const [shares, setShares] = useState(12);
  const [selectedStopLoss, setSelectedStopLoss] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  const incrementShares = () => setShares(shares + 1);
  const decrementShares = () => setShares(shares - 1 < 0 ? 0 : shares - 1);

  const handleStopLossSelection = (option : string) => {
    setSelectedStopLoss(option);
  };

  const handleTargetSelection = (option : string) => {
    setSelectedTarget(option);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-0 w-92 h-92">
      {/* Shares */}
      <div className="flex items-center justify-between mb-1 w-full">
        <label className="font-semibold text-white">Shares</label>
            <div className="flex items-center gap-2 bg-[#1A1520] rounded-md p-1">
                <button onClick={decrementShares} className="text-white px-3 py-1 rounded-md">-</button>
                <input type="text" value={shares} readOnly className="text-center bg-[#1A1520] text-white rounded-md" style={{ width: '5rem' }} />
                <button onClick={incrementShares} className=" text-white px-3 py-1 rounded-md">+</button>
            </div>
        </div>

      {/* Price */}
      <div className="flex items-center justify-between mb-1 w-full">
        <label className="font-semibold text-white">Price</label>
        <div style = {{background : 'rgba(26, 21, 32, 1)',
                width: '159px',
                height: '40px',}}className="relative py-1 px-3 rounded-md w-2/3">
          <span className="text-white " >₹ 6451.50</span>
          <div className="absolute bg-green-500 h-1 bottom-0 left-0 right-0" style={{ width: '20%' }} />
        </div>
      </div>

                {/* Stop Loss Section */}
            <div className="w-full mb-1">
            <div className="flex justify-between items-center mb-1">
                <label className="font-semibold text-white">Stop Loss</label>
                <input
                type="text"
                value={selectedStopLoss || '--'} // Show '--' when no option is selected
                readOnly
                style={{
                    background: 'rgba(26, 21, 32, 1)',
                    width: '159px',
                    height: '40px',
                    borderRadius: '10px 0px 0px 0px',
                }}
                className="text-white text-sm"
                />
            </div>
            <div className="flex gap-2">
                {['2.0', '1.5', '1.0', '0.5'].map((option) => (
                <button
                    key={option}
                    onClick={() => handleStopLossSelection(option)}
                    className={`text-sm bg-[#1A1520] border border-white py-0 px-0 rounded-md ${
                    selectedStopLoss === option ? 'bg-green-500' : ''
                    }`}
                    style={{ width: '26px', height: '22px' }}
                >
                    {option}
                </button>
                ))}
            </div>
            </div>

            {/* Target Section */}
            <div className="w-full mb-1">
            <div className="flex justify-between items-center mb-1">
                <label className="font-semibold text-white">Target</label>
                <input
                type="text"
                value={selectedTarget || '--'} // Show '--' when no option is selected
                readOnly
                style={{
                    background: 'rgba(26, 21, 32, 1)',
                    width: '159px',
                    height: '40px',
                    borderRadius: '10px 0px 0px 0px',
                }}
                className="text-white text-sm"
                />
            </div>
            <div className="flex gap-2">
                {['25', '50', '75', 'MAX'].map((option) => (
                <button
                    key={option}
                    onClick={() => handleTargetSelection(option)}
                    className={`text-sm bg-[#1A1520] border border-white py-0 px-0 rounded-md ${
                    selectedTarget === option ? 'bg-green-500' : ''
                    }`}
                    style={{ width: '26px', height: '22px' }}
                >
                    {option}
                </button>
                ))}
            </div>
            </div>
      <hr className="border-t border-[#352F3D] mx-auto w-80" />

      {/* Calculating the total trade value */}
      <div className="text-white p-4 flex flex-col items-center space-y-4 rounded-lg w-full">
        <div className="flex justify-between w-full">
          <span className="text-lg">Total Trade Value</span>
          <span className="text-lg font-bold">₹43,343</span>
        </div>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded">
          Create Buy Trade
        </button>
      </div>

    </div>
  );
};

export default TradeForm;
