import React, { useState, useEffect } from "react";
import DataService from "../services/Data.service";
import AuthService from "../services/Auth.service";

import Page from "./Page";

const Diary = ({ showAddForm }) => {
  const [entries, setEntries] = useState([]);
  const userId = AuthService.getCurrentUser().userId;
  console.log(typeof userId);
  console.log(typeof userId.toString());

  useEffect(() => {
    const getEntries = async (userId) => {
      const entriesFromDatabase = await DataService.getAll(userId);
      setEntries(entriesFromDatabase.data.data);
    };
    getEntries();
  }, []);

  // const fetchEntries = async () => {
  //   const res = await fetch("http://localhost:5000/entries");
  //   const data = await res.json();
  //   return data;
  // };

  const fetchEntry = async (id) => {
    const res = await fetch(`http://localhost:5000/entries/${id}`);
    const data = await res.json();
    return data;
  };

  const addEntry = async (entry) => {
    // const res = await fetch("http://localhost:5000/entries", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(entry),
    // });
    // const data = await res.json();
    // setEntries([...entries, data]);
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
    <div style={{ marginTop: "5em" }}>
      <Page
        showAddForm={showAddForm}
        onSave={addEntry}
        entries={entries}
        onDelete={deleteEntry}
        getEntry={fetchEntry}
        onUpdate={updateEntry}
      />
      ;
    </div>
  );
};

export default Diary;
