import { takeEvery } from 'redux-saga/effects';
import { ActionUser } from '../actions/user';

export function* watchGame() {
  yield takeEvery(ActionUser.requestGetUserName, requestGetGame);
}

export function* requestGetGame(action: { type: string; payload: string }) {
  console.log('--- game ---');
  console.log(action);
  yield;
}
