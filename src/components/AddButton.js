import React from "react";
import { Button } from "semantic-ui-react";

const AddButton = ({ onAdd, showAddForm }) => {
  const openForm = (e) => {
    e.preventDefault();
    onAdd(!showAddForm);
  };
  return (
    <Button
      color={showAddForm ? "grey" : "blue"}
      icon={showAddForm ? "minus square" : "add square"}
      labelPosition="right"
      content={showAddForm ? "Close" : "Add Entry"}
      onClick={(e) => openForm(e)}
    />
  );
};

export default AddButton;
