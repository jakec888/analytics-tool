import {
  UPDATE_LINK,
  UPDATE_TITLE,
  CREATE_LINK,
  CREATE_LINK_SUCCESS
} from '../actions/createActions.actions';

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
    default:
      return state;
  }
};
