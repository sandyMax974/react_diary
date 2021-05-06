import "./App.css";
import { Divider } from "semantic-ui-react";
import React, { useState } from "react";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "05-05-2021 10:45",
      text: "Today I went to Waitrose. I meet very annoying people on the way.",
    },
    {
      id: 2,
      date: "04-05-2021 12:45",
      text:
        "I played with the cat under the rain. It was his first rain and he kept running in and out, putting paw prints everywhere!",
    },
    {
      id: 3,
      date: "03-05-2021 17:14",
      text:
        "We spent the weekend playing WoW! Our characters are now level 45! :)",
    },
  ]);

  let user = "Sandy";

  const addEntry = (entry) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEntry = { id, ...entry };
    console.log("newEntry:", newEntry);
    setEntries([...entries, newEntry]);
    console.log("entries:", entries);
  };

  return (
    <div className="App">
      <Header user={user} />
      <Divider hidden style={{ marginBottom: "5%" }} />
      <Page onSave={addEntry} entries={entries} />
    </div>
  );
}

export default App;
