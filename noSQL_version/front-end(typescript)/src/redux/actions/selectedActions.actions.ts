import { Dispatch } from 'redux';
import { AppState } from '../../Root';
import { SelectedActions } from '../../types/selected/selected.actions';
import { LinksTypes } from '../../types/links/links';

export const UPDATE_LINK = 'UPDATE_LINK';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const CREATE_LINK = 'CREATE_LINK';
export const SELECT_LINK = 'SELECT_LINK';
export const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS';

export const updateTitle = (title: string): SelectedActions => ({
  type: UPDATE_TITLE,
  payload: { title: title }
});

export const updateLink = (link: string): SelectedActions => ({
  type: UPDATE_LINK,
  payload: { link: link }
});

export const createLink = (
  selectedLink: LinksTypes,
  userId: string,
  history: any
): SelectedActions => ({
  type: CREATE_LINK,
  payload: { selectedLink, userId, history }
});

export const createLinkSuccess = (payload: any): SelectedActions => ({
  type: CREATE_LINK_SUCCESS,
  payload: payload
});

export const selectLink = (
  history: any,
  _id: string,
  redirectURL: string,
  link: string,
  title: string,
  date: string,
  data: any
) => {
  return (dispatch: Dispatch<SelectedActions>, getState: () => AppState) => {
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
