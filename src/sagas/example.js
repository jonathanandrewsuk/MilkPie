import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { S$_CHANGE_GREETING,
  CHANGE_GREETING,
  S$_GET_PHOTOS,
  UPDATE_PHOTOS,
} from '../actions/example';

import apiUrl from '../common/helpers';
import { HttpServicesClass } from '../common/helpers/HttpServices';

const HttpServices = new HttpServicesClass(apiUrl);

function* changeGreeting(action) {
  try {
    yield put({ type: CHANGE_GREETING, data: action.data });
  } catch (e) {
    console.log('changeGreeting error', e);
  }
}

function* getPhotos() {
  try {
    yield put(showLoading());
    const data = yield call(HttpServices.async.get, '/photos');
    yield put({ type: UPDATE_PHOTOS, data });
  } catch (e) {
    // yield put({ type: FETCHING_FAILED, data: e.message});
    console.log(' getPhotos error', e);
  } finally {
    yield put(hideLoading());
  }
}

export default function* allSettingsSagas() {
  yield takeLatest(S$_GET_PHOTOS, getPhotos);
  yield takeLatest(S$_CHANGE_GREETING, changeGreeting);
}
