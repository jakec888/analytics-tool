import linkActions from '../actions/linkActions.actions';

const initialState = {
  link: '',
  title: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case linkActions.UPDATE_LINK:
      return { ...state, link: payload.link };
    case linkActions.UPDATE_TITLE:
      return { ...state, title: payload.title };
    default:
      return state;
  }
};
