import React from "react";
import EntryList from "./EntryList";
import EntryForm from "../components/EntryForm";
import { Divider } from "semantic-ui-react";

const Page = ({ setEntries, entries, getEntry, onUpdate, showAddForm }) => {
  return (
    <div>
      {showAddForm && <EntryForm setEntries={setEntries} entries={entries} />}
      <Divider hidden />
      <EntryList
        entries={entries}
        setEntries={setEntries}
        getEntry={getEntry}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Page;
