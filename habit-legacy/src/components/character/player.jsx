import { quotes } from '../../data/systemData';
import { useState, useEffect } from 'react';

export default function Player({ aiSuggestion = null, onDismiss = null }) {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(aiSuggestion || quotes[randomNum]);
  const [showingAiSuggestion, setShowingAiSuggestion] = useState(!!aiSuggestion);
  
  // Update quote when aiSuggestion changes
  useEffect(() => {
    if (aiSuggestion) {
      setQuote(aiSuggestion);
      setShowingAiSuggestion(true);
    }
  }, [aiSuggestion]);

  const handleClick = () => {
    if (aiSuggestion && showingAiSuggestion) {
      // If we're showing an AI suggestion, permanently switch to regular quotes
      const randomNum = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomNum]);
      setShowingAiSuggestion(false);
      // Inform parent component
      if (onDismiss) onDismiss();
    } else {
      // No AI suggestion or already dismissed, just rotate through quotes
      const randomNum = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomNum]);
    }
  };
  
  // AI suggestion styling - only change text color, not structure
  const textStyle = showingAiSuggestion ? {
    color: '#3b5998', // Facebook blue, professional and distinct
    fontWeight: 'bold'
  } : {};

  return (
    <div
      className="fixed bottom-4 w-full flex items-end flex-row"
      onClick={handleClick}
    >
      <img className="w-32 h-32" src="assets/pixelMascot.png" alt="Mascot" />
      <div className="bg-white flex flex-col justify-center items-center rounded-lg p-4 w-96 h-32 shadow-lg">
        <p 
          className="text-sm text-center text-purple-950 font-semibold"
          style={textStyle}
        >
          {quote}
        </p>
        <p className="text-xs text-gray-400">
          {showingAiSuggestion ? "Click to dismiss" : "Click to change quote"}
        </p>
      </div>
    </div>
  );
}
