import React, { useReducer } from "react";
import { Modal, Button, Image, Icon } from "semantic-ui-react";

function reducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const ViewEntry = ({ entry }) => {
  const [state, dispatch] = useReducer(reducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  return (
    <div style={{ margin: "5px" }}>
      <Button
        icon="eye"
        size="small"
        onClick={() => dispatch({ type: "open", size: "fullscreen" })}
      />

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Content>
          {entry.date}
          <br />
          {entry.text}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => dispatch({ type: "close" })}>Back</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default ViewEntry;
