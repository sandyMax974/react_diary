import React from "react";
import { Segment, Button, Header } from "semantic-ui-react";
import DeleteEntry from "./DeleteEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";

const Entry = ({ entry, onDelete, getEntry, onUpdate }) => {
  const wordCount = entry.text.split(" ").length;
  const truncatedText = entry.text.split(" ").slice(0, 100).join(" ");

  return (
    <Segment.Group key={entry.id}>
      <Segment>
        <Header sub content={entry.created} />
        <Segment>
          <p>{wordCount < 100 ? entry.text : truncatedText + "..."}</p>
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
