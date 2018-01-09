import React from 'react'
import { Container, Grid, Header, Segment } from 'semantic-ui-react';

const ThemingLayout = () => (
  <Container>
    <Header as='h1'>Welcome to Milk Pie 🥛🥧</Header>

    <Grid columns={2} stackable>
      <Grid.Column>
        <p>
          This is a collection of open source tools that can be useful to start a reactjs app. Nothing crazy, just some of the "plumbing" of your app already done.
        </p>
      </Grid.Column>

      <Grid.Column>
      </Grid.Column>
    </Grid>

  </Container>
);
export default ThemingLayout;
