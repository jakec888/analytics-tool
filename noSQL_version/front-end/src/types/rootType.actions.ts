import { AuthActionTypes } from './auth/auth.actions';
import { CreateActionTypes } from './create/create.actions';
import { LinksActionTypes } from './links/links.actions';
import { SelectedActionTypes } from './selected/selected.actions';

export type AppActions = AuthActionTypes | LinksActionTypes | CreateActionTypes | SelectedActionTypes;
