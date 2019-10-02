import { GET_LINKS, GET_LINKS_SUCCESS } from '../../redux/actions/linksActions.actions';
import { Link } from './link';

export interface getLinksInterface {
  type: typeof GET_LINKS;
  payload: {
    userId: string;
  };
}

export interface getLinksSuccessInterface {
  type: typeof GET_LINKS_SUCCESS;
  payload: {
    links: Link[];
  };
}

export type LinksActionTypes = getLinksInterface | getLinksSuccessInterface;
