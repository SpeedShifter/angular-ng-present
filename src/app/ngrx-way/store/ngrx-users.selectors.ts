import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNgrxUsers from './ngrx-users.reducer';
import {ngRxState, usersAdapter} from "./ngrx-users.reducer";

export class ngrxUsersSelectors<V> {
  constructor(public selectState: (state: V) => ngRxState) {}

  private selectUsersState = createSelector(this.selectState, s => s.users);
  private usersSelectors = usersAdapter.getSelectors();
  selectUsersAll = createSelector(this.selectUsersState, this.usersSelectors.selectAll);
  selectUsersEntities = createSelector(this.selectUsersState, this.usersSelectors.selectEntities);

  selectLoading = createSelector(this.selectState, s => s.loading);
  selectSelectedId = createSelector(this.selectState, s => s.selectedUserId);
  selectIsSelected = createSelector(this.selectSelectedId, s => !!s);

  selectSelectedUser = createSelector(this.selectSelectedId, this.selectUsersEntities,
    (id, users) => !!id && users[id] || null);
  selectIsSavingUser = createSelector(this.selectState, s => s.isSavingUser);
}

export const selectNgrxUsersState = createFeatureSelector<fromNgrxUsers.ngRxState>(
  fromNgrxUsers.ngrxUsersFeatureKey
);

export const ngrxSelectors = new ngrxUsersSelectors(selectNgrxUsersState);
