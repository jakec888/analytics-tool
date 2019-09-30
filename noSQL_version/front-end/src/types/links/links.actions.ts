import { GET_LINKS, GET_LINKS_SUCCESS } from '../../redux/actions/linksActions.actions';

export interface getLinksInterface {
  type: typeof GET_LINKS;
  payload: {
    userId: string;
  };
}

export interface getLinksSuccessInterface {
  type: typeof GET_LINKS_SUCCESS;
  payload: {
    links: any;
  };
}

export type LinksActionTypes = getLinksInterface | getLinksSuccessInterface;

export type LinksActions = LinksActionTypes;
