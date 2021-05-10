import React from "react";
import EntryList from "./EntryList";
import EntryForm from "./EntryForm";
import { Divider } from "semantic-ui-react";

const Page = ({ onSave, onDelete, entries, getEntry, onUpdate }) => {
  return (
    <div>
      <EntryForm onSave={onSave} />
      <Divider hidden />
      <EntryList
        entries={entries}
        onDelete={onDelete}
        getEntry={getEntry}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Page;
