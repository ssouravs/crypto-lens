import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentSymbol } from '../store/pricesSlice';

const CryptoSelector: React.FC = () => {
  const dispatch = useDispatch();
  const currentSymbol = useSelector((state: RootState) => state.prices.currentSymbol);
  const symbols = ['BTC', 'ETH', 'DOGE', 'SOL', 'USDT'];

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrentSymbol(event.target.value));
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <label htmlFor="stock-selector" className="block text-lg font-semibold text-gray-300 mb-2">
        Select Stock or Crypto:
      </label>
      <select
        id="stock-selector"
        value={currentSymbol}
        onChange={handleSelect}
        className="p-2 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
      >
        {symbols.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CryptoSelector;

export {}