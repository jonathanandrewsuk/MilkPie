import { UPDATE_RFQS, UPDATE_BOOKS, UPDATE_RFQ_ERRORS, UPDATE_SELECTED_RFQ } from '../actions/book-store';

function addRfqToBook(rfqs, books) {
  if (!rfqs) { return books; }
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
      let { selectedRfq } = state;
      const rfqs = payload.data;
      const books = addRfqToBook(rfqs, state.books);

      if (rfqs) {
        const firstKey = Object.keys(rfqs)[0];
        selectedRfq = (selectedRfq.key && rfqs[selectedRfq.key]) || rfqs[firstKey] || selectedRfq;
      }

      return { ...state, books, rfqs, selectedRfq };
    }
    case UPDATE_SELECTED_RFQ:
      return { ...state, selectedRfq: payload.data };
    case UPDATE_RFQ_ERRORS:
      return { ...state, errors: payload.data };
    case UPDATE_BOOKS: {
      const { rfqs } = state;
      const books = addRfqToBook(rfqs, payload.data);
      return { ...state, books, rfqs };
    }
    default:
      return state;
  }
};
