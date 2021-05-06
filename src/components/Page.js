import React from "react";
import EntryList from "./EntryList";
import EntryForm from "./EntryForm";
import { Divider } from "semantic-ui-react";

const Page = ({ onSave, onDelete, entries }) => {
  return (
    <div>
      <EntryForm onSave={onSave} />
      <Divider hidden />
      <EntryList entries={entries} onDelete={onDelete} />
    </div>
  );
};

export default Page;
