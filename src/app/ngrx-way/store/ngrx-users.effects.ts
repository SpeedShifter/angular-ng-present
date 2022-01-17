import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

// import * as NgrxUsersActions from './ngrx-users.actions';
import {UsersServiceService} from "../../users-service/users-service.service";


@Injectable()
export class NgrxUsersEffects {

  // loadNgrxUsers$;

  // addUser$;

  // updateUser$;

  constructor(private actions$: Actions,
              private usersServiceService: UsersServiceService) {}

}
