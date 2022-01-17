import {Action, combineReducers} from '@ngrx/store';
// import * as NgrxUsersActions from './ngrx-users.actions';

export const ngrxUsersFeatureKey = 'ngrxUsers';

export interface ngRxState {
}

const initialState: ngRxState = {
};

const reducers = combineReducers<ngRxState>({

});

export function ngrxUsersReducer(state: ngRxState, action: Action) {
  return reducers(state, action);
}
