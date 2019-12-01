import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import uuidv4 from 'uuid/v4'

import {all, takeEvery, put, call} from 'redux-saga/effects';
// import API from '../../api';
import {CREATE_LINK, createLinkSuccess} from './createActions.actions';

const onLinkRequest = (data: any) => {
  console.log(data)
  // const request = API.post('/api/link', data);
  const request = API.graphql(graphqlOperation(mutations.createLink, {input: data}));
  console.log('onLinkRequest done')
  return request;
};

/* 
  Saga Worker
*/
export function* createLinkAsync({payload}: any) {
  const {selectedLink, userId, history} = payload;

  const redirectId = uuidv4()
  const redirectURL = window.location.protocol + '//' + window.location.host + '/redirect/' + redirectId

  const data = {
    userId: userId,
    redirectId: redirectId,
    redirectURL: redirectURL,
    link: selectedLink.link,
    title: selectedLink.title,
    date: new Date().toISOString(),
    // data: [],
  };

  // yield call(onLinkRequest, data);

  console.log('creating link')

  const request = yield call(onLinkRequest, data);

  console.log('link created')
  console.log(request)

  yield put(createLinkSuccess());

  yield history.push('/');
  // history.push('/');
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(CREATE_LINK, createLinkAsync)]);
}
