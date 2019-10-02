import {
  UPDATE_LINK,
  UPDATE_TITLE,
  CREATE_LINK,
  CREATE_LINK_SUCCESS,
  SELECT_LINK
} from '../../redux/actions/selectedActions.actions';

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
    selectedLink: string;
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

export interface selectLinkInterface {
  type: typeof SELECT_LINK;
  payload: {
    _id: string;
    redirectURL: string;
    link: string;
    title: string;
    date: string;
    data: any;
  };
}

export type SelectedActionTypes =
  | updateTitleInterface
  | updateLinkInterface
  | createLinkInterface
  | createLinkSuccessInterface
  | selectLinkInterface;
