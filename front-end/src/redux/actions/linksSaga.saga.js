import { all, takeEvery, put, call } from "redux-saga/effects";
import API from "../../api";
import { GET_LINKS, getLinksSuccess } from "./linksActions.actions";
// import axios from "axios";

/* 
  Saga Worker
*/
export function* getLinksAsync({ payload }) {
  console.log("Working getLinksAsync!");
  const { userId } = payload;

  console.log(userId);

  // something goes wrong here
  const request = yield call(API.get(`/api/links/${userId}/`));

  console.log("links");
  console.log(request);

  yield put(
    getLinksSuccess({
      links: request.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    })
  );
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(GET_LINKS, getLinksAsync)]);
}
