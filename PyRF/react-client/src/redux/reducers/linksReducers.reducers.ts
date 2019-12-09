/*
 *
 * this is the file that handles the redux reducer for all the user's query links logic
 *
 */
import {InitLink} from '../../types/links/link';
import {LinksActionTypes} from '../../types/links/links.actions';

import {GET_LINKS, GET_LINKS_SUCCESS} from '../actions/linksActions.actions';

const initialState: InitLink = {
  links: [],
};

export default (state = initialState, actions: LinksActionTypes) => {
  switch (actions.type) {
    case GET_LINKS:
      return {...state};
    case GET_LINKS_SUCCESS:
      return {...state, links: actions.payload.links};
    default:
      return state;
  }
};
