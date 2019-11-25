import { Dispatch } from 'redux';

import { AppState } from '../rootAppState';
import { AppActions } from '../../types/rootType.actions';
import { Link } from '../../types/links/link';

export const SELECT_LINK = 'SELECT_LINK';
export const EDIT_TITLE = 'EDIT_TITLE';
export const EDIT_LINK = 'EDIT_LINK';
export const EDIT_LINK_SUCCESS = 'EDIT_LINK_SUCCESS';

export const editTitle = (title: string): AppActions => ({
  type: EDIT_TITLE,
  payload: { title }
});

export const editLink = (linkId: string, title: string, history: any): AppActions => ({
  type: EDIT_LINK,
  payload: { linkId, title, history }
});

// export const editLinkSuccess = (link: Link, history: any): any => ({
//   type: EDIT_LINK_SUCCESS,
//   payload: {
//     _id: link._id,
//     redirectURL: link.redirectURL,
//     link: link.link,
//     title: link.title,
//     date: link.date,
//     data: link.data
//   }
// });

export const editLinkSuccess = (selected: Link, history: any): any => {
  console.log('editLinkSuccess')
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const { _id, redirectURL, link, title, date, data } = selected;
    dispatch({
      type: EDIT_LINK_SUCCESS,
      payload: {
        _id,
        redirectURL,
        link,
        title,
        date,
        data
      }
    });

    history.push('/view')
  };
};


// export const editLinkSuccess = (selected: Link): any => {
//   console.log('editLinkSuccess')
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     const { _id, redirectURL, link, title, date, data } = selected;
//     dispatch({
//       type: EDIT_LINK_SUCCESS,
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
