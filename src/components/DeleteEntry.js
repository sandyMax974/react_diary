import React, { useState } from "react";
import { Modal, Button, Header, Icon } from "semantic-ui-react";

const DeleteEntry = ({ entry, onDelete }) => {
  const [open, setOpen] = useState(false);

  const onConfirmation = (id) => {
    onDelete(id);
    setOpen(false);
  };

  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button icon="trash" size="small" style={{ margin: "5px 0 5px 0" }} />
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Are you sure?" />
      <Modal.Content>
        <p>This action will delete the entry permanently.</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Back</Button>
        <Button color="red" onClick={() => onConfirmation(entry.id)}>
          Delete
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteEntry;
