import { SELECT_LINK } from '../../redux/actions/selectedActions.actions';

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

export type SelectedActionTypes = selectLinkInterface;