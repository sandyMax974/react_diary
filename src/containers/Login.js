import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Segment,
  Container,
  Header,
  Input,
} from "semantic-ui-react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import AuthService from "../services/Auth.service";

const Login = (props) => {
  // const form = useRef();
  // const checkbtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // const required = (value) => {
  //   if (!value) {
  //     alert("This field is required");
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    // form.current.validateAll();
    // console.log(form.current, checkbtn.current);

    AuthService.login(username, password).then(
      () => {
        props.history.push("/diary");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(error);

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <Container style={{ marginTop: "10%" }}>
      <Segment size="small">
        <Header as="h1">Log In</Header>
        <Form onSubmit={handleLogin}>
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // validations={[required]}
            />
          </Form.Field>
          <Input type="button">
            <Button primary type="submit" content="Submit" />
          </Input>
        </Form>
      </Segment>
    </Container>
  );
};

export default Login;
