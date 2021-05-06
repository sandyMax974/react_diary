import React from "react";
import EntryList from "./EntryList";
import EntryForm from "./EntryForm";
import { Divider } from "semantic-ui-react";

const Page = ({ addEntry, entries }) => {
  return (
    <div>
      <EntryForm onSave={addEntry} />
      <Divider hidden />
      <EntryList entries={entries} />
    </div>
  );
};

export default Page;
