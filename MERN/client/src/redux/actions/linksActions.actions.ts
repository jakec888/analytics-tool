import {Dispatch} from 'redux';

import {AppState} from '../rootAppState';
import {AppActions} from '../../types/rootType.actions';

import {Link} from '../../types/links/link';

export const GET_LINKS = 'GET_LINKS';
export const GET_LINKS_SUCCESS = 'GET_LINKS_SUCCESS';

export const DELETE_LINK = 'DELETE_LINK';
export const DELETE_LINK_SUCCESS = 'DELETE_LINK_SUCCESS';

export const getLinks = (userId: string): AppActions => ({
  type: GET_LINKS,
  payload: {userId},
});

export const getLinksSuccess = (links: Link[]): AppActions => ({
  type: GET_LINKS_SUCCESS,
  payload: {links},
});

export const deleteLink = (linkId: string, history: any): AppActions => ({
  type: DELETE_LINK,
  payload: {linkId, history},
});

export const deleteLinkSuccess = (history: any): any => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch({
      type: DELETE_LINK_SUCCESS,
      payload: {
        _id: '',
        redirectURL: '',
        userId: '',
        link: '',
        title: '',
        date: '',
        data: [],
      },
    });
    history.push('/');
  };
};
