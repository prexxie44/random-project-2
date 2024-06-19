import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';

// Define an interface for Quote
interface Quote {
  quote: string;
  author: string;
}

// Function to get a random quote from the quotes array
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to get a random RGB color
const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Define the transition effect
const transition = "all 1s";

function App() {
  // State to store the current quote and random color
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  // Function to set a new random quote and color
  const newQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
     <div className="background" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
      <div className="quote-content" style={{ color: randomColor, transition }}>
        <h2 id="text">
          <div style={{ display: 'inline-block', marginRight: "10px" }}>
              <FaQuoteLeft size="30" />
            </div>
            {quote.quote}
            <div style={{ display: 'inline-block', marginLeft: "10px" }}>
              <FaQuoteRight size="30" />
            </div>
          </h2>
          <h4 id="author">{quote.author}</h4>
        </div>
        <div className="button">
          <a 
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
              transition,
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button id="new-quote" onClick={newQuote} style={{ background: randomColor, transition }}>New Quote</button>
        </div>
       </div>
    </div>
  );
}

export default App;
