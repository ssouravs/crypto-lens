import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PriceTable: React.FC = () => {
  const { data, currentSymbol } = useSelector((state: RootState) => state.prices);

  const filteredData = data.filter((price) => price.symbol === currentSymbol);

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold text-gray-300 mb-4">
        Price Data for {currentSymbol}
      </h2>
      <table className="min-w-full bg-gray-700 border border-gray-600 rounded-lg">
        <thead>
          <tr className="bg-gray-600 border-b border-gray-500">
            <th className="py-2 px-4 text-left text-gray-300">Name</th>
            <th className="py-2 px-4 text-left text-gray-300">Symbol</th>
            <th className="py-2 px-4 text-left text-gray-300">Price</th>
            <th className="py-2 px-4 text-left text-gray-300">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((price) => (
              <tr key={price.timestamp} className="hover:bg-gray-600">
                <td className="border-b py-2 px-4 text-gray-300">{price.name}</td>
                <td className="border-b py-2 px-4 text-gray-300">{price.symbol}</td>
                <td className="border-b py-2 px-4 text-gray-300">{price.price}</td>
                <td className="border-b py-2 px-4 text-gray-300">{price.timestamp}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;


export {}