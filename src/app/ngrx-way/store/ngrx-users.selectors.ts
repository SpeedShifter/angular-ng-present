import {createFeatureSelector} from '@ngrx/store';
import * as fromNgrxUsers from './ngrx-users.reducer';
import {ngRxState} from './ngrx-users.reducer';

export class ngrxUsersSelectors<V> {
  constructor(public selectState: (state: V) => ngRxState) {}
}

export const selectNgrxUsersState = createFeatureSelector<fromNgrxUsers.ngRxState>(
  fromNgrxUsers.ngrxUsersFeatureKey
);

export const ngrxSelectors = new ngrxUsersSelectors(selectNgrxUsersState);
