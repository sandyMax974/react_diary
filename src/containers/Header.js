import React from "react";
import { Menu, Container, Icon } from "semantic-ui-react";
import AddButton from "../components/AddButton";

const Header = ({ user, showAddForm, onAdd }) => {
  // console.log(user);
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Icon size="large" name="pencil" style={{ marginRight: "1em" }} />
          {!user ? "MY DIARY" : user.toUpperCase() + "'S DIARY"}
        </Menu.Item>

        <Menu.Item position="right">
          {user && <AddButton showAddForm={showAddForm} onAdd={onAdd} />}
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
