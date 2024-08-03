import React from 'react';
import CryptoSelector from './components/CryptoSelector';
import PriceTable from './components/PriceTable';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-100 mb-8 text-center">
        Crypto Lens
      </h1>
      <div className="max-w-2xl mx-auto">
        <CryptoSelector />
        <PriceTable />
      </div>
    </div>
  );
};

export default App;

