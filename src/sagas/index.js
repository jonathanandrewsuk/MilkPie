import { all } from 'redux-saga/effects';
import allExampleSagas from './example';
import allBookStoreSagas from './book-store';


export default function* allSagas() {
  yield all([
    allExampleSagas(),
    allBookStoreSagas(),
  ]);
}
