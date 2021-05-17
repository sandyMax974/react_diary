import React from "react";
import { Form, Button, Segment, Container, Header } from "semantic-ui-react";

const Login = () => {
  return (
    <Container style={{ marginTop: "10%" }}>
      <Segment size="small">
        <Header as="h1">Log In</Header>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default Login;
