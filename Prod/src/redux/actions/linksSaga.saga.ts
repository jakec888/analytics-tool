import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

import {all, takeEvery, put, call} from 'redux-saga/effects';
// import API from '../../api';
import {
  GET_LINKS,
  DELETE_LINK,
  getLinksSuccess,
  deleteLinkSuccess,
} from './linksActions.actions';

const onLinkRequest = (userId: string) => {
  // const request = API.get(`/api/links/${userId}/`);
  const request = API.graphql(graphqlOperation(queries.listLinks));
  return request;
};

export function* getLinksAsync({payload}: any) {
  const {userId} = payload;

  console.log('getting links')

  const request = yield call(onLinkRequest, userId);

  console.log('links gotten')
  console.log(request)

  const result: any = request.data.listLinks.items.sort(
    (a: any, b: any): any =>
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  yield put(getLinksSuccess(result));
}

const onDeleteLinkRequest = (linkId: string) => {
  // const request = API.delete(`/api/link/delete/${linkId}/`);
  const request = API.graphql(graphqlOperation(mutations.updateLink, {input: linkId}));
  return request;
};

export function* deleteLinkAsync({payload}: any) {
  const {linkId, history} = payload;

  console.log('deleting link')

  const request =  yield call(onDeleteLinkRequest, linkId);

  console.log('links deleted')
  console.log(request)

  yield put(deleteLinkSuccess(history));

  // yield put(history.push('/'));
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([
    takeEvery(GET_LINKS, getLinksAsync),
    takeEvery(DELETE_LINK, deleteLinkAsync),
  ]);
}
