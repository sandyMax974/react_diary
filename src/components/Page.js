import React from "react";
import EntryList from "./EntryList";
import EntryForm from "./EntryForm";
import { Divider } from "semantic-ui-react";

const Page = ({ onSave, onDelete, entries, onModalOpen, onUpdate }) => {
  return (
    <div>
      <EntryForm onSave={onSave} />
      <Divider hidden />
      <EntryList
        entries={entries}
        onDelete={onDelete}
        onModalOpen={onModalOpen}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Page;
