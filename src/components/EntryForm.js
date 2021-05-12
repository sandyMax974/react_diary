import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Grid,
  Message,
  Header,
  Container,
  Segment,
  Divider,
} from "semantic-ui-react";
import { Editor } from "@tinymce/tinymce-react";

const EntryForm = ({ onSave }) => {
  // ---> this section needs to be moved to its own component
  const timestamp = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = timestamp.toLocaleDateString(undefined, options);
  const time = timestamp.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  // <---
  const created = `${date}  ${time}`;

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add some content");
      return;
    }

    onSave({ created, text, timestamp });

    setText("");
  };

  return (
    <Container>
      <Grid.Row>
        <Grid.Column>
          <Message>
            <Segment basic>
              <Header as="h3">
                {date} - {time}
              </Header>
              <Divider />
              <form onSubmit={onSubmit}>
                <Editor
                  value={text}
                  init={{
                    height: 200,
                    menubar: false,
                  }}
                  onEditorChange={(e) => setText(e)}
                />
                <br />
                <Input type="button">
                  <Button primary type="Submit" content="Save" />
                </Input>
              </form>
            </Segment>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Container>
  );
};

export default EntryForm;
