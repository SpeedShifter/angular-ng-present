import {Injectable} from '@angular/core';
import {NewUser, User} from "./user.model";
import {delay, lastValueFrom, of} from "rxjs";
import {addUser, getUsers, updateUser} from "./fake-users";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  getUsers(): Promise<User[]> {
    return lastValueFrom(of(getUsers())
      .pipe(delay(1000)));
  }

  addUser(user: NewUser): Promise<User> {
    return lastValueFrom(of(addUser(user))
      .pipe(delay(1000)));
  }

  updateUser(user: User): Promise<User> {
    return lastValueFrom(of(updateUser(user))
      .pipe(delay(1000)));
  }

  constructor() {
  }
}
