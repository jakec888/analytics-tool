/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "createActions.actions.ts"
 * file
 *
 */
import {all, takeEvery, put, call} from 'redux-saga/effects';
import API from '../../api';
import {CREATE_LINK, createLinkSuccess} from './createActions.actions';

const onLinkRequest = (data: any) => {
  const request = API.post('/api/link', data);
  return request;
};

/* 
  Saga Worker
*/
export function* createLinkAsync({payload}: any) {
  const {selectedLink, userId, history} = payload;

  const data = {
    userId: userId,
    link: selectedLink.link,
    title: selectedLink.title,
    date: new Date().toISOString(),
    analytics: [],
  };

  yield call(onLinkRequest, data);

  yield put(createLinkSuccess());

  yield history.push('/');
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(CREATE_LINK, createLinkAsync)]);
}
