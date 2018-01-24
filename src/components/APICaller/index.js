import React from 'react';
import { Grid, Button, Card } from 'semantic-ui-react';


const MappedCards = (props) => (
  props.example.photos.map(card => {return <MyCard image={card.src} header={card.id} />})
)

const MyCard = (props) => (
  <Card
    fluid
    image={props.image}
    header={props.header}
  />
);

const APICaller = (props) => (
    <Grid container doubling stackable>
      <Grid.Column width={4} />
      <Grid.Column width={8}>
        <Button
          color='pink'
          fluid
          onClick={() => { props.exampleActions.getPhotos() }}
        >
          Fire Get Request
        </Button>
        <MappedCards {...props}/>
      </Grid.Column>
      <Grid.Column width={4} />
    </Grid>
);

export default APICaller;
