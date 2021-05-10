import React, { useState } from "react";
import {
  Form,
  TextArea,
  Input,
  Button,
  Grid,
  Message,
  Header,
  Container,
  Segment,
  Divider,
} from "semantic-ui-react";

const EntryForm = ({ onSave }) => {
  const timestamp = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = timestamp.toLocaleDateString("en-GB", options);
  const time = timestamp.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

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

              <Form onSubmit={onSubmit}>
                <TextArea
                  style={{ minHeight: 100 }}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <Divider hidden />

                <Input type="button">
                  <Button primary type="submit">
                    Save
                  </Button>
                </Input>
              </Form>
            </Segment>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Container>
  );
};

export default EntryForm;
