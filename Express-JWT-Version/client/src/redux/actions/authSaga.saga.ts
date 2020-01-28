/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "createActions.actions.ts"
 * file
 *
 */
import {all, takeEvery, put, call} from 'redux-saga/effects';
import API from '../../api';
import {
  LOGIN,
  loginSuccess,
  SIGNUP,
  signUpSuccess,
} from './authActions.actions';

const signupUserRequest = (data: any) => {
  const request = API.post('/auth/signup', data);
  return request;
};

/* 
  Saga Worker
*/
export function* signupUserAsync({payload}: any) {
  const {email, password, history} = payload;

  const data = {
    email,
    password,
  };

  const res = yield call(signupUserRequest, data);

  yield put(signUpSuccess(res.idToken, res._id));

  yield history.push('/login');
}

////////////////////////////////////////////////////////////////////////

const loginUserRequest = (data: any) => {
  const request = API.post('/auth/login', data);
  return request;
};

/* 
  Saga Worker
*/
export function* loginUserAsync({payload}: any) {
  const {email, password, history} = payload;

  const data = {
    email,
    password,
  };

  const res = yield call(loginUserRequest, data);

  if (!res.data.error) {
    const {idToken, _id} = res.data;

    yield put(loginSuccess(idToken, _id));

    yield history.push('/');
  } else {
    yield history.push('/sign-up');
  }
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([
    takeEvery(SIGNUP, signupUserAsync),
    takeEvery(LOGIN, loginUserAsync),
  ]);
}
