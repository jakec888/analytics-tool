import { combineReducers } from 'redux';

import authReducers from './reducers/authReducers.reducers';
import linksReducers from './reducers/linksReducers.reducers';
import selectedReducers from './reducers/selectedReducer.reducers';

export const rootReducer = combineReducers({
  Auth: authReducers,
  AllLinks: linksReducers,
  Selected: selectedReducers
});
