import { Server } from 'react-mock';

import bookSchema, { createCliffSchema } from './DATAstore-books';

const PHOTOS = {
  10: {
    id: 'this is great, from the mock server',
    src: 'http://media.giphy.com/media/UdqUo8xvEcvgA/giphy.gif',
  },
  42: {
    id: 'its not a real api, but its still nice',
    src: 'http://media0.giphy.com/media/Ko2pyD26RdYRi/giphy.gif',
  },
};

// export let server;

export default {
  on: () => {
    Server.mockGet('/api/v1/photos', () => {
      const all = JSON.stringify(Object.keys(PHOTOS).map(k => PHOTOS[k]));
      return [200, { 'Content-Type': 'application/json' }, all];
    }, 1000);

    Server.mockGet('/api/v1/:storeId/books', (request, generator) => {
      const cliffSchema = createCliffSchema(request.params.storeId);

      const books = {
        ...generator.next(2, bookSchema, true),
        ...generator.next(1, cliffSchema, true),
      };
      const all = JSON.stringify(books);

      return [200, { 'Content-Type': 'application/json' }, all];
    }, 1000);

    Server.on();
  },
  off: () => Server.shutdown(),
};
