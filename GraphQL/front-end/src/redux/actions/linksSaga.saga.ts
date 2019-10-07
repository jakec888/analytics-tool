import { all, takeEvery, put, call } from 'redux-saga/effects';

// import API from '../../api';
import { client } from '../../api';
import gql from 'graphql-tag';

import { GET_LINKS, getLinksSuccess } from './linksActions.actions';

// const onLinkRequest = (userId: string) => {
//   const request = API.get(`/api/links/${userId}/`);
//   return request;
// };

const onLinkRequest = (userId: string) => {
  console.log('making request!');
  const request = client.query({
    query: gql`
      {
        getLinks(userId: ${userId}) {
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
  console.log(request);
  return request;
};

/* 
  Saga Worker
*/
export function* getLinksAsync({ payload }: any) {
  const { userId } = payload;

  const request = yield call(onLinkRequest, userId);

  // const result: any = request.data.sort(
  //   (a: any, b: any): any => new Date(b.date).getTime() - new Date(a.date).getTime()
  // );

  const result: any = request.data;

  yield put(getLinksSuccess(result));
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(GET_LINKS, getLinksAsync)]);
}
