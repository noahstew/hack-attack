import { quotes } from '../../data/systemData';
import { useState } from 'react';

export default function Player() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[randomNum]);

  return (
    <div
      className="fixed bottom-4 w-full flex items-end flex-row "
      onClick={() => {
        const randomNum = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomNum]);
      }}
    >
      <img className="w-32 h-32" src="assets/pixelMascot.png" alt="Mascot" />
      <div className="bg-white flex flex-col justify-center items-center rounded-lg p-4 w-96 h-32 shadow-lg">
        <p className="text-sm text-center text-purple-950 font-semibold">
          {quote}
        </p>
        <p className="text-xs text-gray-400">Click to change quote</p>
      </div>
    </div>
  );
}
