import React from 'react'
import {
  Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'


const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const ResponsiveLayout = () => (
  <div>

    <Header
      as='h3'
      content='Doubling Stackable Grid Container'
      style={style.h3}
      textAlign='center'
    />
    <Grid container columns={3} doubling stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>


  </div>
)

export default ResponsiveLayout
