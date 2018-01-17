import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const ReduxExample = (props) => (
  <div>
    <Grid container doubling stackable>
      <Grid.Column width={4} />
      <Grid.Column width={8}>
        <Button
          color='pink'
          fluid
          onClick={() => { props.exampleActions.getPhotos()}}
        >
          Fire Get Request
        </Button>
      </Grid.Column>
      <Grid.Column width={4} />
    </Grid>


  </div>
);

export default ReduxExample;
