import { LinksActionTypes } from '../../types/links/links.actions';
import { Link } from '../../types/links/link';

export const GET_LINKS = 'GET_LINKS';
export const GET_LINKS_SUCCESS = 'GET_LINKS_SUCCESS';

export const getLinks = (userId: string): LinksActionTypes => ({
  type: GET_LINKS,
  payload: { userId }
});

export const getLinksSuccess = (links: Link[]): LinksActionTypes => ({
  type: GET_LINKS_SUCCESS,
  payload: { links }
});
