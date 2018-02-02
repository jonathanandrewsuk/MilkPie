import React from 'react'
import { Container, Grid, Header, Dropdown, Button, Card, Icon, Image } from 'semantic-ui-react';


const friendOptions = [
  {
    text: 'Cliff Vick',
    value: 'Cliff Vick',
    image: { avatar: true, src: 'https://i.imgur.com/tR92Uqx.png' },
  },
];

const SpokeClient = () => (
  <Container>




    <Grid columns={2} stackable>
      <Grid.Column>
        <Header as='h1'>Pick your favourite author!</Header>

            <Dropdown placeholder='Please Select' fluid selection options={friendOptions} />

          <Button
            style={{marginTop: 10}}
            color='green'
            fluid
          >
            Get Prices
          </Button>

      </Grid.Column>

      <Grid.Column>
          <Card > <Image src='https://i.imgur.com/hSFbheY.jpg'/>
          <Card.Content>
            <Card.Header>Book Title</Card.Header>
            <Card.Meta>Seller: Books n Booze</Card.Meta>
            <Card.Description>$45</Card.Description>
          </Card.Content>
          <Card.Content>
            <div className='ui two buttons'>
                      <Button basic color='green'>Approve</Button>
                      <Button basic color='red'>Decline</Button>
                    </div>
          </Card.Content>
          </Card>
      </Grid.Column>
    </Grid>

  </Container>
);
export default SpokeClient;
