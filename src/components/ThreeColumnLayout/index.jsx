import React from 'react';
import { Grid } from 'semantic-ui-react';

import { FeedSummary, MiniMenu, MyFeed } from '../../components';

const ThreeColumnLayout = () => (
  <div>
    <Grid container doubling stackable>
      <Grid.Column width={3}>
        <MiniMenu />
      </Grid.Column>
      <Grid.Column width={9}>
        <MyFeed />
      </Grid.Column>
      <Grid.Column width={4} >
        <FeedSummary />
      </Grid.Column>
    </Grid>


  </div>
);

export default ThreeColumnLayout;
