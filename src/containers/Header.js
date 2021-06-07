import React, { useState } from "react";
import { Menu, Container, Icon, Button } from "semantic-ui-react";
import AddButton from "../components/AddButton";
import AuthService from "../services/Auth.service";

const Header = ({ user, showAddForm, onAdd }) => {
  const logOut = () => {
    AuthService.logout();
  };

  const clickLogout = (e) => {
    e.preventDefault();
    logOut();
  };
  // console.log(user);
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
            <Button onClick={(e) => clickLogout(e)}>
              <i class="large sign-out icon" />
            </Button>
          )}
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
