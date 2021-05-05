import './App.css';
import React from 'react'

function App() {

  const entries = [
    {
      id: 1,
      date: "05-05-2021 10:45",
      text: "Today I went to Waitrose"
    },
    {
      id: 2,
      date: "04-05-2021 12:45",
      text: "I played with the cat under the rain"
    },
    {
      id: 3,
      date: "03-05-2021 17:14",
      text: "We spent the weekend playing WoW!"
    }
  ]

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {entries.map((entry) => <p>{entry.text}</p>)}
    </div>
  );
}

export default App;
