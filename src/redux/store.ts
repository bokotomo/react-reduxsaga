import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducersRoot } from './reducers';
import { sagaRoot } from './sagas';

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducersRoot,
  {},
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaRoot);

export default store;
