import type { Quote } from "../types/Quote";
import quotesData from "../api/quotes.json";

function getRandomQuote(): Quote {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
}

export default  getRandomQuote;