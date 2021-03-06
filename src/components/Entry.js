import React from "react";
import { Segment, Button, Header } from "semantic-ui-react";
import DeleteEntry from "./DeleteEntry";
import UpdateEntry from "./UpdateEntry";
import ViewEntry from "./ViewEntry";

const Entry = ({ entry, onDelete, onUpdate, keyId }) => {
  const wordCount = entry.text.split(" ").length;
  const truncatedText = entry.text.split(" ").slice(0, 100).join(" ");

  // ---> this function needs to be moved to a helper.js
  const sanitize = (html) => {
    var doc = document.createElement("div");
    doc.innerHTML = html;
    return doc.innerHTML;
  };
  // <---

  return (
    <Segment.Group>
      <Segment>
        <Header sub content={entry.created} />
        <Segment>
          {wordCount < 100 ? (
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(entry.text),
              }}
            ></div>
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(truncatedText + "..."),
              }}
            ></div>
          )}
        </Segment>
      </Segment>
      <Button.Group
        style={{ padding: "0 5px 5px 14px" }}
        buttons={[
          <ViewEntry key={`view-${keyId}`} entry={entry} />,
          <UpdateEntry
            key={`update-${keyId}`}
            entry={entry}
            onUpdate={onUpdate}
          />,
          <DeleteEntry
            key={`delete-${keyId}`}
            entry={entry}
            onDelete={onDelete}
          />,
        ]}
      />
    </Segment.Group>
  );
};

export default Entry;
