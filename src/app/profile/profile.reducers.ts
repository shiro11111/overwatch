import {
  LOAD_PROFILE_INFO,
  LOAD_PROFILE_INFO_FAIL,
  LOAD_PROFILE_INFO_SUCCESS,
  PROFILE_INFO_CHANGE_PARAMS,
  ProfileActions
} from './profile.actions';
import { CompleteStats } from '../models/completeStats';
import { StatsParams } from '../models/stats-params';

export interface ProfileState {
  info: CompleteStats;
  params: StatsParams;
}

const initialState: ProfileState = {
  info: null,
  params: null
};

export function profileReducer(state = initialState, action: ProfileActions) {
  switch (action.type) {
    case LOAD_PROFILE_INFO:
      return {
        ...state,
        info: null
      };
    case LOAD_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        info: action.payload
      };
    case LOAD_PROFILE_INFO_FAIL:
      return {
        ...state,
      };
    case PROFILE_INFO_CHANGE_PARAMS:
      return {
        ...state,
        params: action.payload
      };
    default :
      return {
        ...state
      };
  }
}
