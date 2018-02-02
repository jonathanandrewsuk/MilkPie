export const S$_CREATE_QUOTE = 'S$_CREATE_QUOTE';
export const S$_GET_RFQS = 'S$_GET_RFQS';
export const UPDATE_RFQS = 'UPDATE_RFQS';
export const S$_GET_BOOKS = 'S$_GET_BOOKS';
export const UPDATE_BOOKS = 'UPDATE_BOOKS';


export const S$_CREATE_RFQ = 'S$_CREATE_RFQ';
export const S$_GET_QUOTES = 'S$_GET_QUOTES';
export const UPDATE_QUOTES = 'UPDATE_QUOTES';

export const UPDATE_RFQ_ERRORS = 'UPDATE_RFQ_ERRORS';


// Provider
export const SAGAgetBooks = ({ storeId }) => (
  {
    type: S$_GET_BOOKS,
    data: { storeId },
  }
);
// Provider
export const updateBooks = data => (
  {
    type: UPDATE_BOOKS,
    data,
  }
);


// Provider
export const updateRfqs = data => (
  {
    type: UPDATE_RFQS,
    data,
  }
);
// Provider
export const createQuote = ({ rfqId, price, providerId }) => (
  {
    type: S$_CREATE_QUOTE,
    data: { rfqId, price, providerId },
  }
);

// Client/Provider
export const updateRfqErrors = data => (
  {
    type: UPDATE_RFQ_ERRORS,
    data,
  }
);


// Client
export const createRfq = ({ author, clientId }) => (
  {
    type: S$_CREATE_RFQ,
    data: { author, clientId },
  }
);
// Client
export const updateQuotes = data => (
  {
    type: UPDATE_QUOTES,
    data,
  }
);
