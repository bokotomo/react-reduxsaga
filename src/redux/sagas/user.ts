import { put, takeEvery } from 'redux-saga/effects';
import { ActionUser } from '../actions/user';

export function* watchUser() {
  yield takeEvery(ActionUser.requestGetUserName, requestGetUserName);
  yield takeEvery(ActionUser.requestGetUserAge, requestGetUserAge);
}

export function* requestGetUserName(action: { type: string; payload: string }) {
  const id = action.payload;
  const name = id + '_name';
  yield put(ActionUser.setName(name));
}

export function* requestGetUserAge(action: { type: string; payload: string }) {
  const id = action.payload;
  const age = id === 'unique_id' ? 20 : 30;
  yield put(ActionUser.setAge(age));
}
