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
              Object.keys(book.rfqs).map((rfqId, i) => {
                const rfq = book.rfqs[rfqId]
                const price = book.price;         
                const providerId = book.id;              
                const seller = book.seller;
                const cover = book.cover;
                return (<Card.Content key={i}>
                Request from {rfq.userName}
                  <hr/>                
                {rfq.quotes && Object.values(rfq.quotes).find(q => q.seller.toLowerCase() === seller.toLowerCase())? 
                  <div className="ui one buttons mini">
                    <Button
                      basic
                      color="orange"
                      onClick={() => props.bookStoreActions.SAGAcreateQuote({ rfqId, price, cover, providerId, seller })}
                      disabled
                    >Waiting for acceptance!</Button>
                  </div>:
                  <div className="ui two buttons mini">
                    <Button
                      basic
                      color="green"
                      onClick={() => props.bookStoreActions.SAGAcreateQuote({ rfqId, price, cover, providerId, seller })}
                    >Send price</Button>
                    <Button basic color="red">Ignore</Button>
                  </div>
                }

              </Card.Content>)}) :
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
