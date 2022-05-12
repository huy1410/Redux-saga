import { call, put, takeLatest } from 'redux-saga/effects';

import {getPostData} from './postsAPI';
import {getListPostSuccess} from './action';

function* getListPostSaga(action) {
  try {
    const data  = yield call(getPostData);
    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
  }
}

function* postsSaga() {
  yield takeLatest('GET_LIST_POST', getListPostSaga);
}

export default postsSaga;