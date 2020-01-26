import { all, takeLatest } from 'redux-saga/effects';

import { CharTypes } from './characters/types';
import { load } from './characters/sagas';


export default function* rootSaga() {
  return yield all([
    takeLatest(CharTypes.LOAD_REQUEST, load),
  ]);
}
