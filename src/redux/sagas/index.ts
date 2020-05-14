import { all, fork } from 'redux-saga/effects';
import { watchUser } from './user';
import { watchGame } from './game';

export const sagaRoot = function* root() {
  yield all([fork(watchUser), fork(watchGame)]);
};
