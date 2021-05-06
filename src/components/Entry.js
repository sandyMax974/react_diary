import React from "react";
import { Segment } from "semantic-ui-react";
import ViewEntry from "./ViewEntry";

const Entry = ({ entry }) => {
  return (
    <Segment.Group key={entry.id}>
      <Segment>
        {entry.date}
        <br />
        {entry.text}
      </Segment>
      <ViewEntry entry={entry} />
    </Segment.Group>
  );
};

export default Entry;
