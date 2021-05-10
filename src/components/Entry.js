import React from "react";
import { Segment, Button, Header } from "semantic-ui-react";
import DeleteEntry from "./DeleteEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";

const Entry = ({ entry, onDelete, getEntry, onUpdate }) => {
  return (
    <Segment.Group key={entry.id}>
      <Segment>
        <Header sub content={entry.created} />
        <Segment>
          <p>{entry.text}</p>
        </Segment>
      </Segment>
      <Button.Group
        style={{ padding: "0 5px 5px 14px" }}
        buttons={[
          <ViewEntry entry={entry} />,
          <UpdateEntry entry={entry} getEntry={getEntry} onUpdate={onUpdate} />,
          <DeleteEntry entry={entry} onDelete={onDelete} />,
        ]}
      />
    </Segment.Group>
  );
};

export default Entry;
