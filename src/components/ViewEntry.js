import React, { useState } from "react";
import Duration from "./Duration";
import { Modal, Button, Icon, Header, Label } from "semantic-ui-react";

const ViewEntry = ({ entry }) => {
  const [open, setOpen] = useState(false);
  const updatedTimestamp = Date.parse(entry.updated);
  const now = Date.now();
  const duration = updatedTimestamp - now;


  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button style={{ margin: "5px 0 5px 0" }} icon="eye" size="small" />
      }
    >
      <Header>{entry.created}</Header>
      <span>
        {entry.updated && (
          <Label attached="top right">
            <Duration duration={duration} />
          </Label>
        )}
      </span>
      <Modal.Content>
        <Modal.Description>
          <p>{entry.text}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Back</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ViewEntry;
