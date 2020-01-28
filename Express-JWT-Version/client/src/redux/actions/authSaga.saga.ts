/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "createActions.actions.ts"
 * file
 *
 */
import {all, takeEvery, put, call} from 'redux-saga/effects';
import API from '../../api';
import {LOGIN, loginSuccess, SIGNUP, signUpSuccess} from './authActions.actions';


const signupUserRequest = (data: any) => {
  const request = API.post('/auth/signup', data);
  return request;
};

/* 
  Saga Worker
*/
export function* signupUserAsync({payload}: any) {
  console.log('signupUserAsync');

  const {email, password, history} = payload;

  console.log(payload);

  const data = {
    email,
    password
  };

  console.log(data);

  const res = yield call(signupUserRequest, data);

  console.log(res)

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
    password
  };

  const res = yield call(loginUserRequest, data);

  yield put(loginSuccess(res.idToken, res._id));

  yield history.push('/');
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([
    takeEvery(SIGNUP, signupUserAsync), 
    takeEvery(LOGIN, loginUserAsync)
  ]);
}
