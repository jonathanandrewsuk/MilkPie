import React, { Component } from 'react';
import { Container, Header, Button } from 'semantic-ui-react'

import { TestCard, ButtonExampleAnimated } from '../components'

const TestHello = () => (
  <div>
    <Container text fluid>
      <Header as='h1'>This is an example of Semantic Themes in create-react-app</Header>
      <TestCard/>
      <Button>Button</Button>
      <ButtonExampleAnimated/>

      <p>Open a new terminal tab, and run "gulp" inside the semantic folder in the project root</p>

      <p>Then head over to 'crud-boilerplate-front/semantic/theme.config' and edit the theme name</p>

      <p>The CSS will take a minute to re-build but it will trigger a reload and you'll see the changes</p>

      <p>Sometimes you might need to manually refresh for the CSS to work, still working on why that is</p>
    </Container>

  </div>
)

export default TestHello
