import { Dispatch } from 'redux';

import { AppState } from '../rootAppState';
import { AppActions } from '../../types/rootType.actions';
import { Link } from '../../types/links/link';

export const SELECT_LINK = 'SELECT_LINK';
export const UPDATE_TITLE = 'UPDATE_TITLE';

export const updateTitle = (title: string): AppActions => ({
  type: UPDATE_TITLE,
  payload: { title }
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
