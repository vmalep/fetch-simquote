import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState(
    {
      "quote": "My eyes! The goggles do nothing!",
      "character": "Rainier Wolfcastle",
      "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035",
      "characterDirection": "Right"
    }
  )

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => setQuote(data[0]))
      .then(console.log("quote: ", quote))
  

  };

  return (
    <div className="App">
      <button type="button" onClick={getQuote}>Get quote</button>
      <div className='DisplayQuote'>
        <img src={quote.image} alt={quote.character} />
        <p>{quote.character}</p>
        <p>{quote.quote}</p>
      </div>
 
    </div>
  );
}

export default App;
