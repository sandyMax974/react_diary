import "./App.css";
import { Divider } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  let user = "Sandy";
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getEntries = async () => {
      const entriesFromServer = await fetchEntries();
      // console.log(entriesFromServer);
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

  const fetchEntry = async (id) => {
    const res = await fetch(`http://localhost:5000/entries/${id}`);
    const data = await res.json();
    // console.log(data);
    return data;
  };

  const addEntry = async (entry) => {
    // const newEntry = { ...entry };
    // console.log("newEntry:", newEntry);
    const res = await fetch("http://localhost:5000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
    const data = await res.json();
    // console.log(data);
    setEntries([...entries, data]);
    // console.log("entries:", entries);
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
