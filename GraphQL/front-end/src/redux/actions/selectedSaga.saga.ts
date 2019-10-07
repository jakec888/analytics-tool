import { all, takeEvery, put, call } from 'redux-saga/effects';

// import API from '../../api';
import { client } from '../../api';
import gql from 'graphql-tag';

import { CREATE_LINK, createLinkSuccess } from './selectedActions.actions';

// const onLinkRequest = (data: any) => {
//   const request = API.post('/api/link', data);
//   return request;
// };

const onLinkRequest = (data: any) => {
  const request = client.query({
    query: gql`
      {
        getLinks(data: ${data}) {
          id
          userId
          redirectId
          redirectURL
          link
          title
          date
          data {
            clicks
            date
          }
        }
      }
    `
  });
  return request;
};

/* 
  Saga Worker
*/
export function* createLinkAsync({ payload }: any) {
  const { selectedLink, userId, history } = payload;

  const data = {
    userId: userId,
    link: selectedLink.link,
    title: selectedLink.title,
    date: new Date().toISOString(),
    data: []
  };

  const request = yield call(onLinkRequest, data);

  const result = request.data;

  yield put(createLinkSuccess(result));

  history.push('/view');
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(CREATE_LINK, createLinkAsync)]);
}
