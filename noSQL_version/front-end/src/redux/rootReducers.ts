import { combineReducers } from 'redux';

import authReducers from './reducers/authReducers.reducers';
import linksReducers from './reducers/linksReducers.reducers';
import selectedReducers from './reducers/selectedReducer.reducers';
import createReducers from './reducers/createReducer.reducers';

export const rootReducer = combineReducers({
  Auth: authReducers,
  AllLinks: linksReducers,
  Create: createReducers,
  Selected: selectedReducers
});
