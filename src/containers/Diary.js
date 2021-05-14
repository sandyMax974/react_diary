import React, { useState, useEffect } from "react";
import Header from "./Header";
import Page from "./Page";

const Diary = () => {
  let user = "Sandy";
  const [showAddForm, setShowAddForm] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getEntries = async () => {
      const entriesFromServer = await fetchEntries();
      setEntries(entriesFromServer);
    };
    getEntries();
  }, []);

  const fetchEntries = async () => {
    const res = await fetch("http://localhost:5000/entries");
    const data = await res.json();
    return data;
  };

  const fetchEntry = async (id) => {
    const res = await fetch(`http://localhost:5000/entries/${id}`);
    const data = await res.json();
    return data;
  };

  const addEntry = async (entry) => {
    const res = await fetch("http://localhost:5000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
    const data = await res.json();
    setEntries([...entries, data]);
  };

  const deleteEntry = async (id) => {
    await fetch(`http://localhost:5000/entries/${id}`, {
      method: "DELETE",
    });
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const updateEntry = async (entry) => {
    const id = entry.id;
    const text = entry.text;
    const updatedOn = entry.updatedOn;
    const entryToUpdate = await fetchEntry(id);

    const updatedEntry = { ...entryToUpdate, text: text, updated: updatedOn };

    const res = await fetch(`http://localhost:5000/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEntry),
    });
    const data = await res.json();

    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, text: data.text } : entry
      )
    );
  };

  return (
    <>
      <Header user={user} showAddForm={showAddForm} onAdd={setShowAddForm} />
      <Page
        showAddForm={showAddForm}
        onSave={addEntry}
        entries={entries}
        onDelete={deleteEntry}
        getEntry={fetchEntry}
        onUpdate={updateEntry}
      />
      ;
    </>
  );
};

export default Diary;
