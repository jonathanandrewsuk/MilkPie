// A buyer issues an rqf
// A buyer receives a list of quotes
import {
  BUYER_UPDATE_RFQ_ERRORS,
  BUYER_S$_CREATE_RFQ,
  BUYER_UPDATE_RFQS,
} from './actionTypes';

export const BUYERupdateRfqErrors = ({ message }) => (
  {
    type: BUYER_UPDATE_RFQ_ERRORS,
    data: { message },
  }
);

export const BUYERSAGAcreateRfq = ({ author, rfqId }) => (
  {
    type: BUYER_S$_CREATE_RFQ,
    data: { author, rfqId },
  }
);

/**
 * @param {[rfqId: string]: { author, rfqId }} data
 */
export const BUYERSAGAgetRfqs = data => (
  {
    type: BUYER_UPDATE_RFQS,
    data,
  }
);

/**
 * @param {[rfqId: string]: { author, rfqId }} data
 */
export const BUYERupdateRfqs = data => (
  {
    type: BUYER_UPDATE_RFQS,
    data,
  }
);
