import React from "react";
import { useHistory } from "react-router-dom";
import { Menu, Container, Icon, Button } from "semantic-ui-react";
import AddButton from "../components/AddButton";
import AuthService from "../services/Auth.service";

const Header = ({ user, showAddForm, onAdd }) => {
  const history = useHistory();

  const logOut = () => {
    AuthService.logout();
  };

  const clickLogin = (e) => {
    e.preventDefault();
    history.push("/login");
    window.location.reload();
  };

  const clickLogout = (e) => {
    e.preventDefault();
    logOut();
    history.push("/login");
    window.location.reload();
  };
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Icon size="large" name="pencil" style={{ marginRight: "1em" }} />
          {!user ? "MY DIARY" : user.username.toUpperCase() + "'S DIARY"}
        </Menu.Item>

        <Menu.Item position="left">
          {user && <AddButton showAddForm={showAddForm} onAdd={onAdd} />}
        </Menu.Item>

        <Menu.Item position="right">
          {user && (
            <Button
              color="grey"
              icon="sign-out"
              labelPosition="right"
              content="Sign Out"
              onClick={(e) => clickLogout(e)}
            />
          )}
          {!user && (
            <Button
              color="grey"
              icon="sign-in"
              labelPosition="right"
              content="Sign In"
              onClick={(e) => clickLogin(e)}
            />
          )}
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
