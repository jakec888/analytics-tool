import { all, takeEvery, put, call } from 'redux-saga/effects';
import API from '../../api';
import { GET_LINKS, getLinksSuccess } from './linksActions.actions';

const onLinkRequest = (userId) => {
  const request = API.get(`/api/links/${userId}/`);
  return request;
};

/* 
  Saga Worker
*/
export function* getLinksAsync({ payload }) {
  const { userId } = payload;

  const request = yield call(onLinkRequest, userId);

  const result = request.data.sort((a, b) => new Date(b.date) - new Date(a.date));

  yield put(getLinksSuccess(result));
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(GET_LINKS, getLinksAsync)]);
}
