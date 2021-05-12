import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  TextArea,
  Header,
  Input,
} from "semantic-ui-react";

const UpdateEntry = ({ entry, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const timestamp = new Date(); //this is code duplication, needs to be moved in a helper.js

  const onOpen = () => {
    setOpen(true);
    setText(entry.text);
  };

  const onSubmit = (id, text, date, updatedOn) => {
    onUpdate({ id, text, date, updatedOn });
    setText(text);
    setOpen(false);
  };

  return (
    <Modal
      style={{ padding: "0 5px 0 5px" }}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => onOpen(entry.id)}
      trigger={
        <Button size="small" icon="pencil" style={{ margin: "5px 0 5px 0" }} />
      }
    >
      <Form onSubmit={() => onSubmit(entry.id, text, entry.date, timestamp)}>
        <Header
          icon="pencil"
          content="Update entry"
          style={{ margin: "17px 31px 17px 21px" }}
        />
        <Modal.Content>
          <Modal.Description>
            <TextArea
              style={{ minHeight: 200 }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions style={{ margin: "5px" }}>
          <Input type="button">
            <Button type="submit" primary>
              Save
            </Button>
          </Input>
          <Input>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </Input>
        </Modal.Actions>
      </Form>
    </Modal>
  );
};

export default UpdateEntry;
