import { fork, call, takeLatest, take, put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';

import HttpServices from '../common/helpers/HttpServices';


import { syncChannel } from './sync-channel';
import {
  updateRfqs,
  updateRfqErrors,
  updateSelectedRfq,
  S$_CREATE_RFQ,
  updateQuotes,
  S$_CREATE_QUOTE,
  S$_GET_BOOKS,
  updateBooks,
} from '../actions/book-store';

const config = {
  apiKey: 'AIzaSyCTbEFQcvGfLfyfJfwyK3nVrxEQK3gZQ1Y',
  authDomain: 'books-2c11e.firebaseapp.com',
  databaseURL: 'https://books-2c11e.firebaseio.com',
  projectId: 'books-2c11e',
  storageBucket: 'books-2c11e.appspot.com',
  messagingSenderId: '765332316948',
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();


// import { S$_GET_RFQS } from '../actions/book-store';
function rfqChannel(pathOrRef) {
  const ref = database.ref(pathOrRef);

  const channel = eventChannel((emit) => {
    const callback = ref.on(
      'value',
      (dataSnapshot) => {
        console.log('[rfqChannel.channel] dataSnapshot', dataSnapshot);
        return emit({
          snapshot: dataSnapshot,
          value: dataSnapshot.val(),
        });
      },
    );

    // Returns unsubscribe function
    return () => ref.off('value', callback);
  });

  return channel;
}

const defaultTransform = data => data.value;
function* listenToRfqs(pathOrRef) {
  const channel = yield call(
    rfqChannel,
    pathOrRef,
  );
  yield fork(
    syncChannel,
    channel,
    {
      transform: defaultTransform,
      successActionCreator: updateRfqs,
      failureActionCreator: updateRfqErrors,
    },
  );
}

function* listenToQuotes({ rfqId }) {
  const channel = yield call(rfqChannel, `/markets/book-store-idqweqweid/rfqs/${rfqId}/quotes`);

  while(true) {
    const { value: quotes } = yield take(channel);
    yield put(updateQuotes(quotes));
  }
}

async function pushToFirebase(path, object) {
  const key = await database.ref(path).push(object);
  return key;
}

function* SAGAcreateRfq({ data: { author, clientId, userName } }) {
  const { key } = yield call(pushToFirebase, '/markets/book-store-idqweqweid/rfqs', {
    author, clientId, userName,
  });

  // `key` is something like "-Kfn7EyLEoHax0YGoQr0"
  console.log('[book-store.createRfq] key', key);
  yield put(updateSelectedRfq({
    key, author, clientId, quotes: {},
  }));
}

function* SAGAcreateQuote({ data: { rfqId, price, cover, providerId, seller } }) {
  const { key } = yield call(pushToFirebase, `/markets/book-store-idqweqweid/rfqs/${rfqId}/quotes`, {
    price, cover, providerId, seller,
  });

  // `key` is something like "-Kfn7EyLEoHax0YGoQr0"
  console.log('[book-store.createRfq] key', key);
  // yield put(updateSelectedRfq({}));
}


function* SAGAgetBooks({ data: { storeId } }) {
  try {
    yield put(showLoading());
    yield put(updateBooks({}));
    const data = yield call(HttpServices.async.get, `/api/v1/${storeId}/books`);
    yield put(updateBooks(data));
  } catch (e) {
    // yield put({ type: FETCHING_FAILED, data: e.message});
    console.error('getPhotos error', e);
  } finally {
    yield put(hideLoading());
  }
}

export default function* allSettingsSagas() {
  yield takeLatest(S$_CREATE_RFQ, SAGAcreateRfq);
  yield takeLatest(S$_CREATE_QUOTE, SAGAcreateQuote);
  yield takeLatest(S$_GET_BOOKS, SAGAgetBooks);
  yield listenToRfqs('/markets/book-store-idqweqweid/rfqs');
}
