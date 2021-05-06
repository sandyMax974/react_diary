import React from "react";
import { Segment, Button } from "semantic-ui-react";
import DeleteEntry from "./DeleteEntry";
import ViewEntry from "./ViewEntry";

const Entry = ({ entry, onDelete }) => {
  return (
    <Segment.Group key={entry.id}>
      <Segment>
        {entry.date}
        <br />
        {entry.text}
      </Segment>
      <Button.Group
        buttons={[
          <ViewEntry entry={entry} />,
          <DeleteEntry entry={entry} onDelete={onDelete} />,
        ]}
      />
    </Segment.Group>
  );
};

export default Entry;
