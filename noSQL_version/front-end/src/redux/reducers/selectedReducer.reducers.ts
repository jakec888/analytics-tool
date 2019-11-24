import { SELECT_LINK } from '../actions/selectedActions.actions';

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
