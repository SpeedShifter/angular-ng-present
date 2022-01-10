import { createAction, props } from '@ngrx/store';
import {NewUser, User, UserId} from "../../users-service/user.model";

export const loadNgrxUsers = createAction(
  '[NgrxUsers] Load NgrxUsers'
);

export const loadNgrxUsersSuccess = createAction(
  '[NgrxUsers] Load NgrxUsers Success',
  props<{ users: User[] }>()
);

export const loadNgrxUsersFailure = createAction(
  '[NgrxUsers] Load NgrxUsers Failure',
  props<{ error: any }>()
);

export const selectUser = createAction(
  '[NgrxUsers] select user',
  props<{ id: UserId | null }>()
);

export const updateUser = createAction(
  '[NgrxUsers] update user',
  props<{ user: User }>()
);

export const updateUserSuccess = createAction(
  '[NgrxUsers] update user success',
  props<{ user: User }>()
);

export const updateUserFailed = createAction(
  '[NgrxUsers] update user failed',
  props<{ error: any }>()
);


export const addUser = createAction(
  '[NgrxUsers] add user',
  props<{ user: NewUser}>()
);

export const addUserSuccess = createAction(
  '[NgrxUsers] add user success',
  props<{ user: User }>()
);

export const addUserFailed = createAction(
  '[NgrxUsers] add user failed',
  props<{ error: any }>()
);
