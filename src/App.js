import './App.css';
import ReactDOM from 'react-dom';
import React from 'react'
import EntryList from './components/EntryList';
import AddEntry from './components/AddEntry'
import Header from './components/Header'

function App() {
  let user = 'Sandy'

  const entries = [
    {
      id: 1,
      date: "05-05-2021 10:45",
      text: "Today I went to Waitrose. I meet very annoying people on the way."
    },
    {
      id: 2,
      date: "04-05-2021 12:45",
      text: "I played with the cat under the rain. It was his first rain and he kept running in and out, putting paw prints everywhere!"
    },
    {
      id: 3,
      date: "03-05-2021 17:14",
      text: "We spent the weekend playing WoW! Our characters are now level 45! :)"
    }
  ]

  return (
    <div className="App">
      <Header user={user}/>
      <AddEntry />
      <EntryList entries={entries} />
    </div>
  );
}

export default App;
