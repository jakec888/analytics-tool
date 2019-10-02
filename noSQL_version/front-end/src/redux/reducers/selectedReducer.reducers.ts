import {
  UPDATE_LINK,
  UPDATE_TITLE,
  CREATE_LINK,
  SELECT_LINK,
  // GET_LINKS,
  CREATE_LINK_SUCCESS
} from '../actions/selectedActions.actions';

const initialState = {
  _id: '',
  redirectURL: '',
  userId: '',
  link: '',
  title: '',
  date: '',
  data: []
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    // case GET_LINKS:
    //   return { ...state, links: payload.links };
    case UPDATE_LINK:
      return { ...state, link: payload.link };
    case UPDATE_TITLE:
      return { ...state, title: payload.title };
    case CREATE_LINK:
      return {
        ...state,
        _id: payload.id,
        link: payload.link,
        title: payload.title,
        date: payload.date,
        data: payload.data
      };
    case CREATE_LINK_SUCCESS:
      return {
        ...state,
        _id: payload.id,
        link: payload.link,
        title: payload.title,
        date: payload.date,
        data: payload.data
      };
    case SELECT_LINK:
      return {
        ...state,
        _id: payload.id,
        redirectURL: payload.redirectURL,
        link: payload.link,
        title: payload.title,
        date: payload.date,
        data: payload.data
      };
    default:
      return state;
  }
};
