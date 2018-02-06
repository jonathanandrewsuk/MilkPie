import { all } from 'redux-saga/effects';
import allRfqSagas from './rfqs';


export default function* allSagas() {
  yield all([
    allRfqSagas(),
  ]);
}
