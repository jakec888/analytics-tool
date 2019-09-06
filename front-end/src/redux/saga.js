import { all } from "redux-saga/effects";
import linkSagas from "./actions/linksSaga.saga";

export default function* rootSaga(getState) {
  yield all([linkSagas()]);
}
