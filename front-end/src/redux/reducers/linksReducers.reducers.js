import { GET_LINKS } from "../actions/linksActions.actions";

const initialState = {
  links: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LINKS:
      return { ...state, links: payload.links };
    default:
      return state;
  }
};
