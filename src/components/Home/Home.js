import React from 'react'
import {
  Button, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'

import { FeedSummary, MiniMenu, MyFeed } from '../../components'


const Home = () => (
  <div>

    {/* <Header
      as='h3'
      content='Doubling Stackable Grid Container'
      textAlign='center'
    /> */}

    <Grid container doubling stackable>
      <Grid.Column width={3}>
        <MiniMenu/>
      </Grid.Column>
      <Grid.Column width={9}>
        <MyFeed/>
      </Grid.Column>
      <Grid.Column width={4} >
        <FeedSummary/>
      </Grid.Column>
    </Grid>


  </div>
)

export default Home
