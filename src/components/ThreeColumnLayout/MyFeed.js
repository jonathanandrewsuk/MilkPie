import React from 'react'
import { Feed } from 'semantic-ui-react'

const events = [{
  date: '1 Hour Ago',
  image: `${require('../../assets/images/avatar/small/elliot.jpg')}`,
  meta:  {content: "1 Like", like: {icon: "like"}},
  summary: 'Elliot Fu added you as a friend',
}, {
  date: '4 days ago',
  image: `${require('../../assets/images/avatar/small/helen.jpg')}`,
  meta:  {content: "17 Likes", like: {icon: "like"}},
  summary: 'Helen Troy added 2 new illustrations',
  extraImages: [
    `${require('../../assets/images/wireframe/image.png')}`,
    `${require('../../assets/images/wireframe/image-text.png')}`
  ],
}, {
  date: '3 days ago',
  image: `${require('../../assets/images/avatar/small/joe.jpg')}`,
  meta:  {content: "8 Likes", like: {icon: "like"}},
  summary: 'Joe Henderson posted on his page',
  extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
}, {
  date: '4 days ago',
  image: `${require('../../assets/images/avatar/small/justen.jpg')}`,
  meta: {content: "41 Likes", like: {icon: "like"}},
  summary: 'Justen Kitsune added 2 new photos of you',
  extraText: 'Look at these fun pics I found from a few years ago. Good times.',
  extraImages: [
    `${require('../../assets/images/wireframe/image.png')}`,
    `${require('../../assets/images/wireframe/image-text.png')}`
  ],
}]

const MyFeed = () => <Feed className="largeFeed" events={events} />

export default MyFeed
