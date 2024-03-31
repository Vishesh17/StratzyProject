"use client"
import React, { useState } from "react";

const TradeOptions: React.FC = () => {
  const [orderType, setOrderType] = useState('market');
  const [actionType, setActionType] = useState('buy');

  return (
    <div className="text-white p-4 rounded-lg mb-2"> {/* Adjusted margin-top */}
      {/* Order Type */}
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">Order Type</label>
        <div className="flex items-center space-x-4">
          {/* Market Radio */}
          <label className="flex items-center">
            <input
              className="form-radio text-green-500"
              type="radio"
              name="orderType"
              value="market"
              checked={orderType === 'market'}
              onChange={() => setOrderType('market')}
            />
            <span className="ml-2">Market</span>
          </label>
          {/* Limit Radio */}
          <label className="flex items-center">
            <input
              className="form-radio text-green-500"
              type="radio"
              name="orderType"
              value="limit"
              checked={orderType === 'limit'}
              onChange={() => setOrderType('limit')}
            />
            <span className="ml-2">Limit</span>
          </label>
        </div>
      </div>

      {/* Action Type */}
      <div className="flex justify-between items-center mb-2">
        <label className="font-semibold">Action Type</label>
        <div className="flex items-center space-x-4">
          {/* Buy Radio */}
          <label className="flex items-center">
            <input
              className="form-radio text-green-500"
              type="radio"
              name="actionType"
              value="buy"
              checked={actionType === 'buy'}
              onChange={() => setActionType('buy')}
            />
            <span className="ml-2">Buy</span>
          </label>
          {/* Sell Radio */}
          <label className="flex items-center">
            <input
              className="form-radio text-green-500"
              type="radio"
              name="actionType"
              value="sell"
              checked={actionType === 'sell'}
              onChange={() => setActionType('sell')}
            />
            <span className="ml-2">Sell</span>
          </label>
        </div>
      </div>

      <div className="mt-0">
        <hr className="border-t border-[rgba(53,47,61,1)] mx-auto" style={{ width: '320px' }} />
      </div>
    </div>
  );
};

export default TradeOptions;
