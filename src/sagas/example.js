import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

import apiUrl from '../common/helpers';

import { S$_CHANGE_GREETING,
        CHANGE_GREETING,
        S$_GET_PHOTOS,
        UPDATE_PHOTOS,
      } from '../actions/example';


function* changeGreeting(action) {
   try {
     yield put({ type: CHANGE_GREETING, data: action.data });
   } catch (e) {
     console.log('changeGreeting error', e);
   }
}


function* getPhotos(action) {
  try {
    yield put(showLoading())
    // yield put({ type: BEGIN_FETCHING, data: props.appState.message, target:"test"});
    const apiResponse = yield call(productService.getPhotos, action)
    // yield put({ type: COMPLETE_FETCHING });
    console.log('hello', apiResponse)
    yield put({ type: UPDATE_PHOTOS, data: apiResponse.data });

  } catch (e) {
    // yield put({ type: FETCHING_FAILED, data: e.message});
    console.log("errrrrrro", e)
  } finally {
    yield put(hideLoading())
  }

}


const productService = {
  getPhotos: () => axios.get(`${apiUrl}/photos`)

}

export default function* allSettingsSagas() {
  yield takeLatest(S$_GET_PHOTOS, getPhotos);
  yield takeLatest(S$_CHANGE_GREETING, changeGreeting);
}
