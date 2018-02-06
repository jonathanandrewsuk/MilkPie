import { call, put, takeLatest } from 'redux-saga/effects';

import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { HttpServicesClass } from '../../../common/helpers/HttpServices';
import { spokeUrl } from '../../../common/helpers/index';

import { BUYER_S$_CREATE_RFQ, BUYER_UPDATE_RFQS, BUYER_UPDATE_RFQ_ERRORS, BUYER_S$_GET_RFQS } from '../actions/actionTypes';


const HttpServices = new HttpServicesClass(spokeUrl);

function* BUYERSAGAcreateRfq() {
  try {
    yield put(showLoading());
    const data = yield call(HttpServices.async.post, '/rfqs');
    // @TODO save the newly created rfq to rfqs
    console.log('[BUYERSAGAcreateRfq] data', data);
  } catch (e) {
    console.log('[BUYERSAGAcreateRfq] getPhotos error', e);
    yield put({ type: BUYER_UPDATE_RFQ_ERRORS, data: e.message });
  } finally {
    yield put(hideLoading());
  }
}

function* BUYERSAGAgetRfqs() {
  try {
    yield put(showLoading());
    const data = yield call(HttpServices.async.get, '/rfqs');
    yield put({ type: BUYER_UPDATE_RFQS, data });
  } catch (e) {
    console.log(' getPhotos error', e);
    yield put({ type: BUYER_UPDATE_RFQ_ERRORS, data: e.message });
  } finally {
    yield put(hideLoading());
  }
}

export default function* allSettingsSagas() {
  yield takeLatest(BUYER_S$_CREATE_RFQ, BUYERSAGAcreateRfq);
  yield takeLatest(BUYER_S$_GET_RFQS, BUYERSAGAgetRfqs);
}
