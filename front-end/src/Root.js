import React from "react";
import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import ReduxThunk from "redux-thunk";
import rootReducer from "./redux/rootReducers";
import rootSagas from "./redux/rootSaga";

export default ({ children, initialState = {} }) => {
  const ReduxSaga = createSagaMiddleware();

  const middlewares = [ReduxThunk, ReduxSaga];

  const composeEnhancers = compose(
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const store = createStore(
    combineReducers(rootReducer),
    initialState,
    composeEnhancers
  );

  ReduxSaga.run(rootSagas);

  return <Provider store={store}>{children}</Provider>;
};
