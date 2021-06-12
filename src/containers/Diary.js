import React, { useState, useEffect } from "react";
import DataService from "../services/Data.service";
import AuthService from "../services/Auth.service";

import Page from "./Page";

const Diary = ({ showAddForm }) => {
  const [entries, setEntries] = useState([]);
  const userId = AuthService.getCurrentUser().userId;

  useEffect(() => {
    const getEntries = async () => {
      const entriesFromDatabase = await DataService.getAll(userId);
      setEntries(entriesFromDatabase.data.data);
    };
    getEntries();
  }, []);

  const fetchEntry = async (id) => {
    const res = await fetch(`http://localhost:5000/entries/${id}`);
    const data = await res.json();
    return data;
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
        entries={entries}
        setEntries={setEntries}
        onDelete={deleteEntry}
        getEntry={fetchEntry}
        onUpdate={updateEntry}
      />
      ;
    </div>
  );
};

export default Diary;
