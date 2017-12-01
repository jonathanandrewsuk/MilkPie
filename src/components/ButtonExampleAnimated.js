import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>

    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>

    <Button animated='fade'>
      <Button.Content visible>
        Sign-up for a Pro account
      </Button.Content>
      <Button.Content hidden>
        $12.99 a month
      </Button.Content>
    </Button>

    <Button label={1048} icon='fork' labelPosition='left' />
    <Button label='1,048' icon='fork' labelPosition='left' />
    <Button label={{ content: '2,048' }} icon='heart' content='Like' labelPosition='left' />
    <Button label={<Label>2,048</Label>} icon='heart' content='Like' />
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

export default ButtonExampleAnimated
