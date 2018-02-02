import { Faker } from 'react-mock';

export const STORES = {
  'b-n-rice': {
    name: 'Book n Rice',
  },
  'b-n-pie': {
    name: 'Book n Pie',
  },
  'b-n-booz': {
    name: 'Book n Booz',
  },
};


export function createCliffSchema(storeId) {
  const STORE = STORES[storeId];
  return {
    title: () => Faker.random.words(),
    cover: 'https://i.imgur.com/hSFbheY.jpg',
    price: () => Faker.random.number(),
    seller: STORE.name,
    author: 'CLiff Vick',
  };
}

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
