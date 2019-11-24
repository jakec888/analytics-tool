import { Dispatch } from 'redux';

import { AppState } from '../rootAppState';
import { AppActions } from '../../types/rootType.actions';
import { Link } from '../../types/links/link';

export const SELECT_LINK = 'SELECT_LINK';

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
