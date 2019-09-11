import { GET_LINKS, GET_LINKS_SUCCESS } from "../actions/linksActions.actions";

const initialState = {
  links: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LINKS:
      return { ...state, links: payload.links };
    case GET_LINKS_SUCCESS:
      return { ...state, links: payload.links };
    default:
      return state;
  }
};
