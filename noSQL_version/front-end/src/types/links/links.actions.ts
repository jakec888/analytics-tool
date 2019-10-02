import { GET_LINKS, GET_LINKS_SUCCESS } from '../../redux/actions/linksActions.actions';
import { LinksType } from './link';

export interface getLinksInterface {
  type: typeof GET_LINKS;
  payload: {
    userId: string;
  };
}

export interface getLinksSuccessInterface {
  type: typeof GET_LINKS_SUCCESS;
  payload: {
    links: LinksType[];
  };
}

export type LinksActionTypes = getLinksInterface | getLinksSuccessInterface;

export type LinksActions = LinksActionTypes;
