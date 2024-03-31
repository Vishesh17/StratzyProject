"use client"
import React, { useState } from "react";
import { CSSProperties } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('invest');

  const activeStyle: CSSProperties = {
    padding: '12px 66px',
    background: 'linear-gradient(180deg, #393046 0%, #2D2537 100%)',
    borderRadius: '8px',
    width: '162.48px',
    height: '45px',
  };

  const inactiveStyle: CSSProperties = {
    padding: '12px 66px',
    borderRadius: '8px',
    width: '162.48px',
    height: '45px',
  };

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row', // Correctly typed as 'row'
    alignItems: 'center',
    justifyContent: 'space-between', // Added to distribute space between tabs
    padding: '7px 7px',
    gap: '20px',
    width: '370px',
    height: '59px',
    background: '#1A1520',
    borderRadius: '12px 0px 0px 0px',
  };

  return (
    <div className="flex justify-center items-center p-2" style={containerStyle}>
      <div className="flex w-full justify-between">
        {/* Invest Button */}
        <button
          className={`text-sm font-medium transition-colors duration-300 ${activeTab === 'invest' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('invest')}
          style={activeTab === 'invest' ? activeStyle : inactiveStyle}
        >
          Invest
        </button>

        {/* Trade Button */}
        <button
          className={`text-sm font-medium transition-colors duration-300 ${activeTab === 'trade' ? 'text-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('trade')}
          style={activeTab === 'trade' ? activeStyle : inactiveStyle}
        >
          Trade
        </button>
      </div>
    </div>
  );
}
