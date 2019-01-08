import { CompleteStats } from '../models/completeStats';
import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { StatsParams } from '../models/stats-params';

export const LOAD_PROFILE_INFO = 'LOAD_PROFILE_INFO';
export const LOAD_PROFILE_INFO_SUCCESS = 'LOAD_PROFILE_INFO_SUCCESS';
export const LOAD_PROFILE_INFO_FAIL = 'LOAD_PROFILE_INFO_FAIL';
export const PROFILE_INFO_CHANGE_PARAMS = 'PROFILE_INFO_CHANGE_PARAMS';
export const ADD_ENTITIES = 'ADD_ENTITIES';

export class LoadProfileInfo implements Action {
  readonly type = LOAD_PROFILE_INFO;
}

export class LoadProfileInfoSuccess implements Action {
  readonly type = LOAD_PROFILE_INFO_SUCCESS;

  constructor(public payload: CompleteStats) {}
}

export class LoadProfileInfoFail implements Action {
  readonly type = LOAD_PROFILE_INFO_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class ProfileInfoChangeParams implements Action {
  readonly type = PROFILE_INFO_CHANGE_PARAMS;

  constructor(public payload: StatsParams) {}
}

export type ProfileActions = LoadProfileInfo | LoadProfileInfoSuccess | LoadProfileInfoFail | ProfileInfoChangeParams;

