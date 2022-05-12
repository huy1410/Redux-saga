import { call, put, takeLatest } from 'redux-saga/effects';

import {getPostData} from './postsAPI';
import {getListPostSuccess} from './action';

function* getListPostSaga(action) {
  try {
    //call : Gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết
    const data  = yield call(getPostData);
    //put : Dùng để dispatch một action
    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
  }
}

function* postsSaga() {
  // takeLates : : Có nghĩa là nếu chúng ta thực hiện một loạt các actions,
  // nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng
  yield takeLatest('GET_LIST_POST', getListPostSaga);
}

export default postsSaga;