import { createStore, applyMiddleware } from 'redux';
import helloWorldReducer from '../reducers/helloWorldReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

const ReduxSaga = createSagaMiddleware();

const middlewares = [
  thunk,
  ReduxSaga,
];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const configureStore = (railsProps) => (
  createStore(helloWorldReducer, railsProps, composeEnhancers)
);

export default configureStore;
