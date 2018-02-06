import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react';

const ThemingLayout = () => (
  <Container>
    <Header as='h1'>My Favorite Author</Header>

    <Grid columns={2} stackable>
      <Grid.Column>
        <p>
          Showcasing how Spoke can be used to solve a real world problem
        </p>

        <hr />
        <h3>Scenario</h3>
        <p>
          Jonny likes to read books written by a handful of authors.
          <ul>
            <li>Problem is that he cannot find stores that sell a book (any book) from his favorite authors and at a reasonable price.</li>
            <li> So we create a portal for Jonny to easily contact stores that can help him find a good book to read that does not cost much money</li>
          </ul>
        </p>
        <hr />
        <br />
        <br />
        <br />
        Build on <span role="img" aria-label="Milk">🥛</span><span role="img" aria-label="Pie">🥧</span>
      </Grid.Column>

      <Grid.Column>
      </Grid.Column>
    </Grid>

  </Container>
);
export default ThemingLayout;
