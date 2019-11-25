import { all, takeEvery, put, call } from 'redux-saga/effects';
import API from '../../api';
import { UPDATE_LINK, updateLinkSuccess } from './selectedActions.actions';

const onUpdateLinkRequest = (linkId: string, data: any) => {
  const request = API.put(`/api/link/update/${linkId}`, data);
  return request;
};

/* 
  Saga Worker
*/
export function* updateLinkAsync({ payload }: any) {
  const { linkId, title, history } = payload;

  const data = {
    linkId: linkId,
    title: title,
    date: new Date().toISOString()
  };

  console.log('Data')
  console.log(data)

  const selected = yield call(onUpdateLinkRequest, linkId, data);

  console.log('Selected!')
  console.log(selected.data)

  yield put(updateLinkSuccess(selected.data));

  yield history.push('/view');
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(UPDATE_LINK, updateLinkAsync)]);
}
