import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const ActionUser = {
  setName: actionCreator<string>('SET_NAME'),
  setAge: actionCreator<number>('SET_AGE'),
  requestGetUserName: actionCreator<string>('REQUEST_GET_USER_NAME'),
  requestGetUserAge: actionCreator<string>('REQUEST_GET_USER_AGE'),
};
