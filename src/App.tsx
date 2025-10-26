import { useState } from "react";
import type { Quote } from "./types/Quote";
import getRandomQuote from "./data/quotesRandom";

function App() {
const [quote, setQuote] = useState<Quote>(getRandomQuote());

const handleNewQuote = () => {
  setQuote(getRandomQuote());
}
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-700 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-serif text-5xl">
          Random Quotes
        </h1>
          
          <div className="flex flex-col items-center m-15">
            <p className="p-10">
              {quote.text}
            </p>
            <p className="">
              {quote.author}
            </p>
          </div>
      
      </div>

      <button
        type="button"
        onClick={handleNewQuote}
        className="m-15 p-8 rounded-full bg-gray-500 hover:bg-gray-600 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-700 "
        >
          NEW QUOTE
      </button>
    </div>
  )
}

export default App;
