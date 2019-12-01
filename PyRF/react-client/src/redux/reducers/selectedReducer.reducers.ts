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
  data: [],
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
        id: payload.id,
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
