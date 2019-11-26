import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer} from './redux/rootReducers';
import rootSagas from './redux/rootSaga';

import {AppState} from './redux/rootAppState';
import {AppActions} from './types/rootType.actions';

interface Props {
  children: any;
  initialState?: {
    [value: string]: any;
  };
}

export default ({children, initialState = {}}: Props) => {
  const ReduxSaga = createSagaMiddleware();

  const middlewares = [
    thunk as ThunkMiddleware<AppState, AppActions>,
    ReduxSaga,
  ];

  const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState, composeEnhancers);

  ReduxSaga.run(rootSagas);

  return <Provider store={store}>{children}</Provider>;
};
