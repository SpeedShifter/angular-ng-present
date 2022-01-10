import {Action, combineReducers, createReducer, on} from '@ngrx/store';
import * as NgrxUsersActions from './ngrx-users.actions';
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {User, UserId} from "../../users-service/user.model";

export const ngrxUsersFeatureKey = 'ngrxUsers';

export interface ngRxState {
  users: EntityState<User>;
  loading: boolean;
  selectedUserId: UserId | null;

  isSavingUser: boolean;
}

export const usersAdapter = createEntityAdapter<User>({
  selectId: (u) => u.id
});

const initialState: ngRxState = {
  users: usersAdapter.getInitialState(),
  loading: false,
  selectedUserId: null,
  isSavingUser: false
};

const usersReducer = createReducer(
  initialState.users,

  on(NgrxUsersActions.loadNgrxUsers, (state) => usersAdapter.removeAll(state)),
  on(NgrxUsersActions.loadNgrxUsersSuccess, (state, action) => usersAdapter.setAll(action.users, state)),
  on(NgrxUsersActions.loadNgrxUsersFailure, (state, action) => usersAdapter.removeAll(state)),

  on(NgrxUsersActions.addUserSuccess, (state, action) => usersAdapter.addOne(action.user, state)),
  on(NgrxUsersActions.updateUserSuccess, (state, action) => usersAdapter.upsertOne(action.user, state)),
);

const loadingReducer = createReducer(
  initialState.loading,

  on(NgrxUsersActions.loadNgrxUsers, state => true),
  on(NgrxUsersActions.loadNgrxUsersSuccess,
    NgrxUsersActions.loadNgrxUsersFailure, (state, action) => false)
);

const selectedUserIdReducer = createReducer(
  initialState.selectedUserId,

  on(NgrxUsersActions.selectUser, (state, action) => action.id),
  on(NgrxUsersActions.loadNgrxUsers,
    NgrxUsersActions.loadNgrxUsersSuccess,
    NgrxUsersActions.loadNgrxUsersFailure, (state, action) => null)
);

const isSavingUserReducer = createReducer(
  initialState.isSavingUser,

  on(NgrxUsersActions.updateUser, NgrxUsersActions.addUser, (state, action) => true),
  on(NgrxUsersActions.updateUserSuccess, NgrxUsersActions.updateUserFailed,
    NgrxUsersActions.addUserSuccess, NgrxUsersActions.addUserFailed,
    (state, action) => false)
);

const reducers = combineReducers<ngRxState>({
  users: usersReducer,
  loading: loadingReducer,
  selectedUserId: selectedUserIdReducer,
  isSavingUser: isSavingUserReducer
});

export function ngrxUsersReducer(state: ngRxState, action: Action) {
  return reducers(state, action);
}
