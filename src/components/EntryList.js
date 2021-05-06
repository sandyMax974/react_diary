import React from "react";
import { Grid, Header, Divider, Container } from "semantic-ui-react";
import Entry from "./Entry";

const EntryList = ({ entries, onDelete }) => {
  return (
    <Container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Entries</Header>
          <Divider />
          {entries.map((entry) => {
            return <Entry entry={entry} onDelete={onDelete} />;
          })}
        </Grid.Column>
      </Grid.Row>
    </Container>
  );
};

export default EntryList;
