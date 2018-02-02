import { UPDATE_RFQS, UPDATE_BOOKS, UPDATE_RFQ_ERRORS } from '../actions/book-store';

function addRfqToBook(rfqs, books) {
  const newBooks = Object.assign({}, books);
  Object.keys(rfqs).forEach((key) => {
    const rfq = rfqs[key];
    const book = Object.values(newBooks).find(bk => bk.author.toLowerCase() === rfq.author.toLowerCase());
    if (book) {
      if (!book.rfqs) {
        book.rfqs = {};
      }
      book.rfqs[key] = rfq;
    }
  });
  console.log('[addRfqToBook] newBooks', newBooks);
  return newBooks;
}


export default(state = {
  books: {}, // For providers
  rfqs: {}, // For clients
  selectedRfq: {},
}, payload) => {
  switch (payload.type) {
    case UPDATE_RFQS: {
      const rfqs = payload.data;
      const books = addRfqToBook(rfqs, state.books);
      return { ...state, books, rfqs };
    }
    case UPDATE_RFQ_ERRORS:
      return { ...state, errors: payload.data };
    case UPDATE_BOOKS: {
      const books = payload.data;
      const rfqs = addRfqToBook(state.rfqs, books);
      return { ...state, books, rfqs };
    }
    default:
      return state;
  }
};
