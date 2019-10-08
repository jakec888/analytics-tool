import { InitLink } from '../../types/links/link';
import { LinksActionTypes } from '../../types/links/links.actions';

import { GET_LINKS, GET_LINKS_SUCCESS } from '../actions/linksActions.actions';

const initialState: InitLink = {
  links: []
};

export default (state = initialState, actions: LinksActionTypes) => {
  switch (actions.type) {
    // typescript redux saga problem here!!! supposed to pass the userId
    // case GET_LINKS:
    //   return { ...state, links: actions.payload.links };
    case GET_LINKS:
      return { ...state };
    case GET_LINKS_SUCCESS:
      return { ...state, links: actions.payload.links };
    default:
      return state;
  }
};
