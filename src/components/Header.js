import React from "react";
import { Menu, Container, Icon } from "semantic-ui-react";
import AddButton from "./AddButton";

const Header = ({ user, showAddForm, onAdd }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Icon size="large" name="pencil" style={{ marginRight: "1em" }} />
          {user.toUpperCase()}'S DIARY
        </Menu.Item>

        <Menu.Item position="right">
          <AddButton showAddForm={showAddForm} onAdd={onAdd} />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
