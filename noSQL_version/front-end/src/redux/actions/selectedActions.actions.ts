import { Dispatch } from 'redux';

import { AppState } from '../rootAppState';
import { AppActions } from '../../types/rootType.actions';
import { Link } from '../../types/links/link';

export const SELECT_LINK = 'SELECT_LINK';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_LINK = 'UPDATE_LINK';
export const UPDATE_LINK_SUCCESS = 'UPDATE_LINK_SUCCESS';

export const updateTitle = (title: string): AppActions => ({
  type: UPDATE_TITLE,
  payload: { title }
});

export const updateLink = (linkId: string, title: string, history: any): AppActions => ({
  type: UPDATE_LINK,
  payload: { linkId, title, history }
});

export const updateLinkSuccess = (link: Link): any => ({
  type: UPDATE_LINK_SUCCESS,
  payload: {
    _id: link._id,
    redirectURL: link.redirectURL,
    link: link.link,
    title: link.title,
    date: link.date,
    data: link.data
  }
});

// export const updateLinkSuccess = (selected: Link): any => {
//   console.log('updateLinkSuccess')
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     const { _id, redirectURL, link, title, date, data } = selected;
//     dispatch({
//       type: UPDATE_LINK_SUCCESS,
//       payload: {
//         _id,
//         redirectURL,
//         link,
//         title,
//         date,
//         data
//       }
//     });
//   };
// };

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
