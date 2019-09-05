import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import rootReducer from "./reducers/reducers";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const middlewares = [ReduxThunk, saga];

const composeEnhancers = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(combineReducers(rootReducer), composeEnhancers);

export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers/reducers";

// import { combineReducers } from "redux";

// const composeEnhancers = compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const store = createStore(combineReducers(reducers), composeEnhancers);

// export default store;
