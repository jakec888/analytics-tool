import { Dispatch } from 'redux';

import { AppState } from '../rootAppState';
import { AppActions } from '../../types/rootType.actions';
import { Link } from '../../types/links/link';

export const UPDATE_LINK = 'UPDATE_LINK';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const CREATE_LINK = 'CREATE_LINK';
export const SELECT_LINK = 'SELECT_LINK';
export const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS';

export const updateTitle = (title: string): AppActions => ({
  type: UPDATE_TITLE,
  payload: { title: title }
});

export const updateLink = (link: string): AppActions => ({
  type: UPDATE_LINK,
  payload: { link: link }
});

export const createLink = (
  selectedLink: Link,
  userId: string,
  history: any
): AppActions => ({
  type: CREATE_LINK,
  payload: { selectedLink, userId, history }
});

export const createLinkSuccess = (payload: any): AppActions => ({
  type: CREATE_LINK_SUCCESS,
  payload: payload
});

export const selectLink = (history: any, selected: Link) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const { _id, redirectURL, link, title, date, data } = selected;

    dispatch({
      type: SELECT_LINK,
      payload: {
        _id,
        redirectURL,
        link,
        title,
        date,
        data
      }
    });
    history.push('/view');
  };
};
