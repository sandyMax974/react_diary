import React from "react";
import { Grid, Header, Divider, Segment, Container } from "semantic-ui-react";

const EntryList = ({ entries }) => {
  return (
    <Container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Entries</Header>
          <Divider />

          <Segment>
            {entries.map((entry, index) => {
              return (
                <Segment.Group>
                  <Segment>
                    <div key={index}>
                      {entry.date}
                      <br />
                      {entry.text}
                    </div>
                  </Segment>
                </Segment.Group>
              );
            })}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Container>
  );
};

export default EntryList;
