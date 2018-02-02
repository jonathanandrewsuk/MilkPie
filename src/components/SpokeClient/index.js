import React from 'react';
import { Container, Grid, Header, Dropdown, Button, Card, Image } from 'semantic-ui-react';


const friendOptions = [
  {
    text: 'Cliff Vick',
    value: 'Cliff Vick',
    image: { avatar: true, src: 'https://i.imgur.com/tR92Uqx.png' },
  },
];

const SpokeIncomingQuotes = (props) => (
  <Grid.Column>

      {
        props.bookStore.selectedRfq.quotes?
        Object.values(props.bookStore.selectedRfq.quotes)
          .map((quote, i) => <Card >quote!</Card>):
          <Card ><Card.Content>no response yet...</Card.Content></Card>
      }

  </Grid.Column>
)

const SpokeClient = (props) => (
  <Container>
    <Grid columns={2} stackable>
      <Grid.Column>
        <Header as='h1'>Pick your favourite author</Header>

            <Dropdown placeholder='Please Select' fluid selection options={friendOptions} />

          <Button
            style={{marginTop: 10}}
            color='green'
            fluid
            onClick={() => props.bookStoreActions.createRfq({ author: 'Cliff Vick', clientId: 'client-app-oruser-id' })}
          >
            Get Prices
          </Button>

      </Grid.Column>

      <SpokeIncomingQuotes {...props} />

    </Grid>

  </Container>
);


const SpokeClientSaved = (props) => (
  <Container>
    <Grid columns={2} stackable>
      <Grid.Column>
        <Header as='h1'>Pick your favourite author</Header>

            <Dropdown placeholder='Please Select' fluid selection options={friendOptions} />

          <Button
            style={{marginTop: 10}}
            color='green'
            fluid
            onClick={() => props.bookStoreActions.createRfq({ author: 'Cliff Vick', clientId: 'client-app-oruser-id' })}
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
