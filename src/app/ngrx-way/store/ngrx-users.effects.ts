import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import {from, of} from 'rxjs';

import * as NgrxUsersActions from './ngrx-users.actions';
import {UsersServiceService} from "../../users-service/users-service.service";


@Injectable()
export class NgrxUsersEffects {

  loadNgrxUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NgrxUsersActions.loadNgrxUsers),
      exhaustMap(() =>
      from(this.usersServiceService.getUsers())
        .pipe(
          map(users => NgrxUsersActions.loadNgrxUsersSuccess({users})),
          catchError(error => of(NgrxUsersActions.loadNgrxUsersFailure({error})))
        )
      )
    );
  });

  addUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NgrxUsersActions.addUser),
      mergeMap(({user}) =>
        from(this.usersServiceService.addUser(user))
          .pipe(
            map(resp => NgrxUsersActions.addUserSuccess({user: resp})),
            catchError(error => of(NgrxUsersActions.addUserFailed({error})))
          )
      )
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NgrxUsersActions.updateUser),
      mergeMap(({user}) =>
        from(this.usersServiceService.updateUser(user))
          .pipe(
            map(resp => NgrxUsersActions.updateUserSuccess({user: resp})),
            catchError(error => of(NgrxUsersActions.updateUserFailed({error})))
          )
      )
    );
  });

  constructor(private actions$: Actions,
              private usersServiceService: UsersServiceService) {}

}
