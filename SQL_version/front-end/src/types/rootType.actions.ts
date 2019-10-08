import { AuthActionTypes } from './auth/auth.actions';
import { LinksActionTypes } from './links/links.actions';
import { SelectedActionTypes } from './selected/selected.actions';

export type AppActions = AuthActionTypes | LinksActionTypes | SelectedActionTypes;
