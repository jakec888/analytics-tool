import {Link} from '../links/link';

import {
  UPDATE_LINK,
  UPDATE_TITLE,
  CREATE_LINK,
  CREATE_LINK_SUCCESS,
} from '../../redux/actions/createActions.actions';

export interface updateTitleInterface {
  type: typeof UPDATE_TITLE;
  payload: {
    title: string;
  };
}

export interface updateLinkInterface {
  type: typeof UPDATE_LINK;
  payload: {
    link: string;
  };
}

export interface createLinkInterface {
  type: typeof CREATE_LINK;
  payload: {
    selectedLink: Link;
    userId: string;
    history: any;
  };
}

export interface createLinkSuccessInterface {
  type: typeof CREATE_LINK_SUCCESS;
  payload: {
    payload: any;
  };
}

export type CreateActionTypes =
  | updateTitleInterface
  | updateLinkInterface
  | createLinkInterface
  | createLinkSuccessInterface;
