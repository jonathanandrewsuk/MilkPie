import { all } from 'redux-saga/effects';
import allExampleSagas from './example';


export default function* allSagas() {
    yield all([
        allExampleSagas()
  ]);
}
