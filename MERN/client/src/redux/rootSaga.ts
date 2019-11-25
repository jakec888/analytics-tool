import { all } from 'redux-saga/effects';
import linkSagas from './actions/linksSaga.saga';
import createSaga from './actions/createSaga.saga';
import selectedSaga from './actions/selectedSaga.saga';

export default function* rootSaga() {
  yield all([linkSagas(), createSaga(), selectedSaga()]);
}
