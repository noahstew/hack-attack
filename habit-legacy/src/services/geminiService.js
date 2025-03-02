import { GoogleGenerativeAI } from '@google/generative-ai';

const getGeminiSuggestion = async (habitTitle, habitDescription) => {
  try {
    // Get API key from environment variables
    const API_KEY = import.meta.env.VITE_APP_GEMINI_API_KEY;    
    if (!API_KEY) {
      console.error('Gemini API key is missing from environment variables');
      return "I can't suggest improvements without access to AI capabilities.";
    }

    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Create the prompt for SMART goal improvement
    const prompt = `
      I have a habit with the title: "${habitTitle}" and description: "${habitDescription}".
      Based on SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound),
      suggest ONE short, actionable sentence on how I can improve this habit.
      Keep your response to a single sentence that is clear and direct.
    `;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Make sure we only return one sentence by trimming extra content
    let suggestion = text.trim();
    const sentenceEnd = suggestion.indexOf('.');
    if (sentenceEnd !== -1 && sentenceEnd < suggestion.length - 1) {
      suggestion = suggestion.substring(0, sentenceEnd + 1);
    }
    
    return suggestion;
  } catch (error) {
    console.error('Error getting suggestion from Gemini:', error);
    return "I couldn't connect to my AI brain right now. Try again later!";
  }
};

export default getGeminiSuggestion;
