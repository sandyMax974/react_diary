import React, { useState } from "react";
import { Modal, Button, Icon, Header } from "semantic-ui-react";

const ViewEntry = ({ entry }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button style={{ margin: "5px 0 5px 0" }} icon="eye" size="small" />
      }
    >
      <Header content={entry.created} />
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
