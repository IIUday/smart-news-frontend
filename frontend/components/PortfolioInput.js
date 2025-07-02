
import { useState } from 'react';

export default function PortfolioInput({ setPortfolio, filterNews }) {
  const [input, setInput] = useState('');

  const submit = () => {
    const symbols = input.split(',').map(s => s.trim());
    setPortfolio(symbols);
    filterNews();
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Link Your Portfolio</h2>
      <input
        className="border p-2 w-full mt-2"
        placeholder="Enter stock symbols (e.g., TCS, RELIANCE)"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white" onClick={submit}>
        Analyze News
      </button>
    </div>
  );
}
