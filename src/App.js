import "./App.css";
import { Divider } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getEntries = async () => {
      const entriesFromServer = await fetchEntries();
      console.log(entriesFromServer);
      setEntries(entriesFromServer);
    };
    getEntries();
  }, []);

  const fetchEntries = async () => {
    const res = await fetch("http://localhost:5000/entries");
    const data = await res.json();
    // console.log(data);
    return data;
  };

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
