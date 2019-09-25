import { all, takeEvery, put, call } from "redux-saga/effects";
import API from "../../api";
import { CREATE_LINK, createLinkSuccess } from "./selectedActions.actions";

const onLinkRequest = data => {
  const request = API.post("/api/link/", data);
  return request;
};

/* 
  Saga Worker
*/
export function* createLinkAsync({ payload }) {
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

  history.push("/view");
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(CREATE_LINK, createLinkAsync)]);
}
