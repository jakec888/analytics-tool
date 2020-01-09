/*
 *
 * this is the file that handles the redux reducer for all the selected link logic
 *
 */
import {
  SELECT_LINK,
  EDIT_TITLE,
  EDIT_LINK_SUCCESS,
} from '../actions/selectedActions.actions';

const initialState = {
  id: '',
  redirectURL: '',
  userId: '',
  link: '',
  title: '',
  date: '',
  analytics: [],
};

export default (state = initialState, {type, payload}: any) => {
  switch (type) {
    case SELECT_LINK:
      return {
        ...state,
        id: payload.id,
        redirectURL: payload.redirectURL,
        link: payload.link,
        title: payload.title,
        date: payload.date,
        analytics: payload.analytics,
      };
    case EDIT_TITLE:
      return {
        ...state,
        title: payload.title,
      };
    case EDIT_LINK_SUCCESS:
      return {
        ...state,
        id: payload.id,
        redirectURL: payload.redirectURL,
        link: payload.link,
        title: payload.title,
        date: payload.date,
        analytics: payload.analytics,
      };
    default:
      return state;
  }
};
