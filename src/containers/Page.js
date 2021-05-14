import React from "react";
import EntryList from "./EntryList";
import EntryForm from "../components/EntryForm";
import { Divider } from "semantic-ui-react";

const Page = ({
  onSave,
  onDelete,
  entries,
  getEntry,
  onUpdate,
  showAddForm,
}) => {
  return (
    <div>
      {showAddForm && <EntryForm onSave={onSave} />}
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
