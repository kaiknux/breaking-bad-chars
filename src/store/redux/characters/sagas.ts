import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFail } from './actions';


export function* load() {
  try {
    const res = yield call(api.get, './');
    yield put(loadSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    yield put(loadFail());
  }
}
