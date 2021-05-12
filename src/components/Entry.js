import React from "react";
import { Segment, Button, Header } from "semantic-ui-react";
import DeleteEntry from "./DeleteEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";

const Entry = ({ entry, onDelete, onUpdate, keyId }) => {
  return (
    <Segment.Group>
      <Segment>
        <Header sub content={entry.created} />
        <Segment>
          <p>{entry.text}</p>
        </Segment>
      </Segment>
      <Button.Group
        style={{ padding: "0 5px 5px 14px" }}
        buttons={[
          <ViewEntry key={`view-${keyId}`} entry={entry} />,
          <UpdateEntry
            key={`update-${keyId}`}
            entry={entry}
            onUpdate={onUpdate}
          />,
          <DeleteEntry
            key={`delete-${keyId}`}
            entry={entry}
            onDelete={onDelete}
          />,
        ]}
      />
    </Segment.Group>
  );
};

export default Entry;
