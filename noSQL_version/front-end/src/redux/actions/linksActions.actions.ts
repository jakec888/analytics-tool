import { LinksActions } from '../../types/links/links.actions';

export const GET_LINKS = 'GET_LINKS';
export const GET_LINKS_SUCCESS = 'GET_LINKS_SUCCESS';

export const getLinks = (userId: string): LinksActions => ({
  type: GET_LINKS,
  payload: { userId }
});

export const getLinksSuccess = (links: any): LinksActions => ({
  type: GET_LINKS_SUCCESS,
  payload: { links }
});
