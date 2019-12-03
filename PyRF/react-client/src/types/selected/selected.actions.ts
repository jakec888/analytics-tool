import {
  SELECT_LINK,
  EDIT_TITLE,
  EDIT_LINK,
  EDIT_LINK_SUCCESS,
} from '../../redux/actions/selectedActions.actions';

export interface editTitleInterface {
  type: typeof EDIT_TITLE;
  payload: {
    title: string;
  };
}

export interface editLinkInterface {
  type: typeof EDIT_LINK;
  payload: {
    linkId: string;
    title: string;
    history: any;
  };
}

export interface editLinkSuccessInterface {
  type: typeof EDIT_LINK_SUCCESS;
  payload: {
    _id: string;
    redirectURL: string;
    link: string;
    title: string;
    date: string;
    data: any;
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
  | selectLinkInterface
  | editTitleInterface
  | editLinkInterface
  | editLinkSuccessInterface;
