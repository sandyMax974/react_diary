import React from "react";
import EntryList from "./EntryList";
import EntryForm from "../components/EntryForm";
import { Divider } from "semantic-ui-react";

const Page = ({
  setEntries,
  // onDelete,
  entries,
  getEntry,
  onUpdate,
  showAddForm,
}) => {
  return (
    <div>
      {showAddForm && <EntryForm setEntries={setEntries} entries={entries} />}
      <Divider hidden />
      <EntryList
        entries={entries}
        // onDelete={onDelete}
        setEntries={setEntries}
        getEntry={getEntry}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Page;
