import { Faker } from 'react-mock';

export const cliffSchema = {
  title: () => Faker.random.words(),
  cover: 'https://i.imgur.com/hSFbheY.jpg',
  price: () => Faker.random.number(),
  seller: 'Book n Rice',
  author: 'CLiff Vick',
};

export default {
  title: () => Faker.random.words(),
  cover: () => Faker.random.arrayElement(['https://i.imgur.com/V1oVdS9.jpg', 'https://i.imgur.com/1ivs2dq.jpg']),
  price: () => Faker.random.number(),
  seller: 'Book n Rice',
  author: () => Faker.name.findName(),
};
