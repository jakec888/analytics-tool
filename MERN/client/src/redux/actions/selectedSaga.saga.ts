import { all, takeEvery, put, call } from 'redux-saga/effects';
import API from '../../api';
import { EDIT_LINK, editLinkSuccess } from './selectedActions.actions';

const onUpdateLinkRequest = (linkId: string, data: any) => {
  const request = API.put(`/api/link/edit/${linkId}`, data);
  return request;
};

/* 
  Saga Worker
*/
export function* editLinkAsync({ payload }: any) {
  const { linkId, title, history } = payload;

  const data = {
    linkId: linkId,
    title: title,
    date: new Date().toISOString()
  };
  
  const selected = yield call(onUpdateLinkRequest, linkId, data);

  yield put(editLinkSuccess(selected.data, history));
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(EDIT_LINK, editLinkAsync)]);
}
