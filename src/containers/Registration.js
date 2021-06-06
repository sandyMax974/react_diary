import React, { useState } from "react";
import {
  Form,
  Button,
  Segment,
  Container,
  Header,
  Input,
} from "semantic-ui-react";
import AuthService from "../services/Auth.service";

const Registration = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);
    console.log("in registration...", username, email, password);
    // form.current.validateAll();

    AuthService.register(username, email, password).then(
      (response) => {
        console.log("registration response");
        console.log(response);
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container style={{ marginTop: "10%" }}>
      <Segment size="small">
        <Header as="h1">Register</Header>
        <Form onSubmit={handleRegistration}>
          <Form.Field>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // validations={[required]}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // validations={[required]}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // validations={[required]}
            />
          </Form.Field>
          <Input type="button">
            <Button primary type="submit" content="Sign Up" />
          </Input>
        </Form>
      </Segment>
    </Container>
  );
};

export default Registration;
