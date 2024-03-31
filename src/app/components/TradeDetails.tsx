"use client"
import React from "react";

const TradeDetails: React.FC = () => {
  return (
    <div className="text-white p-5 rounded-lg " style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '370px', height: '110px' }}>
      <div className="flex justify-between">
        <div className="text-xl font-bold">TATA STEEL</div>
        <div className="text-lg">₹ 6451.50</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xs">{'{TickerName}'}</div>
        <div className="text-red-500 text-sm">10.8 (1.65%)</div>
      </div>
    </div>
  );
};

export default TradeDetails;
