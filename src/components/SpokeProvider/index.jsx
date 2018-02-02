import React from 'react';
import { Container, Grid, Header, Dropdown, Button, Card, Image } from 'semantic-ui-react';


const friendOptions = [
  {
    text: 'Cliff Vick',
    value: 'Cliff Vick',
    image: { avatar: true, src: 'https://i.imgur.com/tR92Uqx.png' },
  },
];

const SpokeProvider = props => (
  <Container>
    <Grid columns={3} stackable>

      {props.bookStore.books &&
        Object.values(props.bookStore.books).map((book, i) => 
        <Grid.Column key={i}>
          <Card > <Image src={book.cover} />
          <Card.Content>
              <Card.Meta>   {book.author} </Card.Meta>
              <Card.Meta>Seller: {book.seller}</Card.Meta>
              <Card.Description>${book.price}</Card.Description>
            </Card.Content>
            {book.rfqs?
              Object.values(book.rfqs).map((rfq, i) => <Card.Content key={i}>
                Request from {rfq.clientId}

                <div className="ui two buttons mini">
                  <Button basic color="green">Send price</Button>
                  <Button basic color="red">Ignore</Button>
                </div>

              </Card.Content>) :
              <Card.Content>no buyers</Card.Content>
            }
        </Card>
        </Grid.Column>
      )}

  </Grid>

    </Container>
);

const SpokeProviderSaved = props => (
  <Container>
    <Grid columns={3} stackable>
      <Grid.Column>
        <Card > <Image src="https://i.imgur.com/hSFbheY.jpg" />
        <Card.Content>
            <Card.Header>Book Title</Card.Header>
            <Card.Meta>Seller: Books n Booze</Card.Meta>
            <Card.Description>$45</Card.Description>
          </Card.Content>
        <Card.Content>
            <div className="ui two buttons">
              <Button basic color="green">Approve</Button>
              <Button basic color="red">Decline</Button>
            </div>
          </Card.Content>
      </Card>
      </Grid.Column>

      <Grid.Column>
        <Card > <Image src="https://i.imgur.com/hSFbheY.jpg" />
            <Card.Content>
            <Card.Header>Book Title</Card.Header>
            <Card.Meta>Seller: Books n Booze</Card.Meta>
            <Card.Description>$45</Card.Description>
          </Card.Content>
            <Card.Content>
            <div className="ui two buttons">
              <Button basic color="green">Approve</Button>
              <Button basic color="red">Decline</Button>
            </div>
          </Card.Content>
          </Card>

      </Grid.Column>

      <Grid.Column>
        <Card > <Image src="https://i.imgur.com/hSFbheY.jpg" />
            <Card.Content>
            <Card.Header>Book Title</Card.Header>
            <Card.Meta>Seller: Books n Booze</Card.Meta>
            <Card.Description>$45</Card.Description>
          </Card.Content>
            <Card.Content>
            <div className="ui two buttons">
              <Button basic color="green">Approve</Button>
              <Button basic color="red">Decline</Button>
            </div>
          </Card.Content>
          </Card>

      </Grid.Column>

      <Grid.Column>
        <Card > <Image src="https://i.imgur.com/hSFbheY.jpg" />
            <Card.Content>
            <Card.Header>Book Title</Card.Header>
            <Card.Meta>Seller: Books n Booze</Card.Meta>
            <Card.Description>$45</Card.Description>
          </Card.Content>
            <Card.Content>
            <div className="ui two buttons">
              <Button basic color="green">Approve</Button>
              <Button basic color="red">Decline</Button>
            </div>
          </Card.Content>
          </Card>

      </Grid.Column>

    </Grid>

  </Container>
);
export default SpokeProvider;
