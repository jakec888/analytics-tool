import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/rootReducers';
import rootSagas from './redux/rootSaga';

interface Props {
  children: any;
  initialState?: {
    [value: string]: any;
  };
}

export type AppState = ReturnType<typeof rootReducer>;

export default ({ children, initialState = {} }: Props) => {
  const ReduxSaga = createSagaMiddleware();

  const middlewares = [ReduxThunk, ReduxSaga];

  const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(
    combineReducers(rootReducer),
    initialState,
    composeEnhancers
  );

  ReduxSaga.run(rootSagas);

  return <Provider store={store}>{children}</Provider>;
};
