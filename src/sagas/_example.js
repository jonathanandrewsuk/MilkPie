import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { S$_CHANGE_GREETING,
        CHANGE_GREETING
      } from '../actions/example';


function* changeGreeting(action) {
   try {
     const apiResponse = yield call(productService.getProductsForOne, action)
     yield put({ type: CHANGE_GREETING, data: action.data });
   } catch (e) {
     console.log('changeGreeting error', e);
   }
}

export default function* allSettingsSagas() {
  yield takeLatest(S$_CHANGE_GREETING, changeGreeting);
}
