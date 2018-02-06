import { BUYER_UPDATE_RFQS, BUYER_UPDATE_RFQ_ERRORS } from '../actions/rfqs';

// @TODO create an initialState object
const InitialState = {
  buyer: {
    rfqs: {},
    quotes: {},
    errors: {},
  },
};

export default (state = InitialState.buyer, payload) => {
  switch (payload.type) {
    case BUYER_UPDATE_RFQS:
      return { ...state, rfqs: payload.data };
    case BUYER_UPDATE_RFQ_ERRORS:
      return { ...state, errors: { ...state.errors, RFQ_ERRORS: payload.data.message } };
    default:
      return state;
  }
};
