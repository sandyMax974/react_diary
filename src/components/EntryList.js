import React from "react";
import { Grid, Header, Divider, Container } from "semantic-ui-react";
import Entry from "./Entry";

const EntryList = ({ entries, onDelete, getEntry, onUpdate }) => {
  const descendingOrder = entries.sort((a, b) => {
    const dateA = Date.parse(a.timestamp);
    const dateB = Date.parse(b.timestamp);

    return dateB - dateA;
  });

  return (
    <Container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">Entries</Header>
          <Divider />
          {descendingOrder.map((entry, index) => {
            return (
              <div key={index.toString()}>
                <Entry
                  index={index}
                  entry={entry}
                  onDelete={onDelete}
                  getEntry={getEntry}
                  onUpdate={onUpdate}
                />
              </div>
            );
          })}
        </Grid.Column>
      </Grid.Row>
    </Container>
  );
};

export default EntryList;
