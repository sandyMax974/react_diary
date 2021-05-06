import React from "react";
import { Grid, Header, Divider, Segment, Container } from "semantic-ui-react";

const EntryList = ({ entries }) => {
  return (
    <Container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Entries</Header>
          <Divider />

          {entries.map((entry) => {
            return (
              <Segment.Group key={entry.id}>
                <Segment>
                  {entry.date}
                  <br />
                  {entry.text}
                </Segment>
              </Segment.Group>
            );
          })}
        </Grid.Column>
      </Grid.Row>
    </Container>
  );
};

export default EntryList;
