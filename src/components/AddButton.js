import React from "react";
import { Button } from "semantic-ui-react";

const AddButton = ({ onAdd, showAddForm }) => {
  const openForm = (e) => {
    e.preventDefault();
    onAdd(!showAddForm);
  };
  return (
    <Button
      color="blue"
      icon="add square"
      labelPosition="right"
      content="Add"
      onClick={(e) => openForm(e)}
    />
  );
};

export default AddButton;
