import React from "react";
import { Segment, Button } from "semantic-ui-react";
import DeleteEntry from "./DeleteEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";

const Entry = ({ entry, onDelete, onModalOpen, onUpdate }) => {
  return (
    <Segment.Group key={entry.id}>
      <Segment>
        {entry.date}
        <br />
        {entry.text}
      </Segment>
      <Button.Group
        style={{ padding: "0 5px 5px 14px" }}
        buttons={[
          <ViewEntry entry={entry} />,
          <UpdateEntry
            entry={entry}
            onModalOpen={onModalOpen}
            onUpdate={onUpdate}
          />,
          <DeleteEntry entry={entry} onDelete={onDelete} />,
        ]}
      />
    </Segment.Group>
  );
};

export default Entry;
