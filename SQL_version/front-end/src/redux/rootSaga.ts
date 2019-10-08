import { all } from 'redux-saga/effects';
import linkSagas from './actions/linksSaga.saga';
import selectedSaga from './actions/selectedSaga.saga';

export default function* rootSaga() {
  yield all([linkSagas(), selectedSaga()]);
}
