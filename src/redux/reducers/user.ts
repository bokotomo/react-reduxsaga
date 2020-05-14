import { ActionUser } from '../actions/user';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface StateUser {
  readonly name: string;
  readonly age: number;
}

const initialStateUser: StateUser = {
  name: 'boko',
  age: 11,
};

export const ReducerUser = reducerWithInitialState(initialStateUser)
  .case(ActionUser.setName, (state, name) => {
    return { ...state, name };
  })
  .case(ActionUser.setAge, (state, age) => {
    return { ...state, age };
  });
