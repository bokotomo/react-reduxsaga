import { combineReducers } from 'redux';
import { ReducerUser, StateUser } from './user';

export interface AppState {
  user: StateUser;
}

export const reducersRoot = combineReducers<AppState>({
  user: ReducerUser,
});
