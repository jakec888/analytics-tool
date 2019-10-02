import { combineReducers } from 'redux';

import authReducers from './reducers/authReducers.reducers';
import linksReducers from './reducers/linksReducers.reducers';
import selectedReducers from './reducers/selectedReducer.reducers';

// export default {
//   Auth: authReducers,
//   Link: linksReducers,
//   Selected: selectedReducers
// };

export const rootReducer = combineReducers({
  Auth: authReducers,
  Link: linksReducers,
  Selected: selectedReducers
});
