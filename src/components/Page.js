import React from "react";
import EntryList from "./EntryList";
import EntryForm from "./EntryForm";
import { Divider } from "semantic-ui-react";

const Page = ({ onSave, entries }) => {
  return (
    <div>
      <EntryForm onSave={onSave} />
      <Divider hidden />
      <EntryList entries={entries} />
    </div>
  );
};

export default Page;
