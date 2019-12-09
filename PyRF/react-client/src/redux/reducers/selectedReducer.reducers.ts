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
  _id: '',
  redirectURL: '',
  userId: '',
  link: '',
  title: '',
  date: '',
  data: [],
};

export default (state = initialState, {type, payload}: any) => {
  switch (type) {
    case SELECT_LINK:
      return {
        ...state,
        _id: payload._id,
        redirectURL: payload.redirectURL,
        link: payload.link,
        title: payload.title,
        date: payload.date,
        data: payload.data,
      };
    case EDIT_TITLE:
      return {
        ...state,
        title: payload.title,
      };
    case EDIT_LINK_SUCCESS:
      return {
        ...state,
        _id: payload._id,
        redirectURL: payload.redirectURL,
        link: payload.link,
        title: payload.title,
        date: payload.date,
        data: payload.data,
      };
    default:
      return state;
  }
};
