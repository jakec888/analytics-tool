/*
 *
 * this is the file that handles typescript's app state
 *
 */
import {rootReducer} from './rootReducers';

export type AppState = ReturnType<typeof rootReducer>;
