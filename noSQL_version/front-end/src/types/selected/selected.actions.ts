import { SELECT_LINK, UPDATE_LINK, UPDATE_LINK_SUCCESS } from '../../redux/actions/selectedActions.actions';

export interface updateLinkInterface {
  type: typeof UPDATE_LINK;
  payload: {
    title: string;
  };
}

export interface updateLinkSuccessInterface {
  type: typeof UPDATE_LINK_SUCCESS;
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

export type SelectedActionTypes = selectLinkInterface | updateLinkInterface | updateLinkSuccessInterface;