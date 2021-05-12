import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  TextArea,
  Header,
  Input,
} from "semantic-ui-react";
import { Editor } from "@tinymce/tinymce-react";

const UpdateEntry = ({ entry, getEntry, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const onOpen = async (id) => {
    setOpen(true);
    const entryData = await getEntry(id);
    // console.log(entryData);
    setText(entryData.text);
  };

  const onSubmit = (id, text, date) => {
    // console.log(id, text);
    onUpdate({ id, text, date });
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
      <Form onSubmit={() => onSubmit(entry.id, text, entry.date)}>
        <Header
          icon="pencil"
          content="Update entry"
          style={{ margin: "17px 31px 17px 21px" }}
        />
        <Modal.Content>
          <Modal.Description>
            {/* <TextArea
              style={{ minHeight: 200 }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            /> */}
            <Editor
              value={text}
              init={{
                height: 200,
                menubar: false,
              }}
              onEditorChange={(e) => setText(e)}
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
