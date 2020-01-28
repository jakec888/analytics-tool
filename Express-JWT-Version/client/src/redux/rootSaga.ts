/*
 *
 * this is the file that handles all all the sagas
 *
 */
import {all} from 'redux-saga/effects';
import authSagas from './actions/authSaga.saga';
import linkSagas from './actions/linksSaga.saga';
import createSaga from './actions/createSaga.saga';
import selectedSaga from './actions/selectedSaga.saga';

export default function* rootSaga() {
  yield all([authSagas(), linkSagas(), createSaga(), selectedSaga()]);
}
