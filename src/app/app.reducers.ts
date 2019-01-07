

import * as fromProfileState from './profile/profile.reducers';
import { profileReducer } from './profile/profile.reducers';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
  profileState: fromProfileState.ProfileState;
}

export const reducers: ActionReducerMap<AppState> = {
  profileState: profileReducer
}

