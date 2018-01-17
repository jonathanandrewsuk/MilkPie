import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const ReduxExample = (props) => (
  <div>
    <Grid container doubling stackable>
      <Grid.Column width={4} />
      <Grid.Column width={8}>
        <h1>{props.example.greeting}</h1>
        <Button
          color={props.example.color}
          fluid
          onClick={() => { props.exampleActions.changeColor('orange'), props.exampleActions.changeGreeting('it worked!')}}
        >
          Fire Two Redux Actions
        </Button>
      </Grid.Column>
      <Grid.Column width={4} />
    </Grid>


  </div>
);

export default ReduxExample;
