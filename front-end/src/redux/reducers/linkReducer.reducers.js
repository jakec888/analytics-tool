import linkActions from '../actions/linkActions.actions';

const initialState = {
  link: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case linkActions.UPDATE_LINK:
      return { ...state, link: payload.link };
    default:
      return state;
  }
};
