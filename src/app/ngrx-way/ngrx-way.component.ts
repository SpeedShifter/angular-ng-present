import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ngrxSelectors} from "./store/ngrx-users.selectors";
import {addUser, loadNgrxUsers, selectUser, updateUser} from "./store/ngrx-users.actions";
import {User, UserId} from "../users-service/user.model";

@Component({
  selector: 'app-ngrx-way',
  templateUrl: './ngrx-way.component.html',
  styleUrls: ['./ngrx-way.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxWayComponent implements OnInit {

  users$ = this.store.pipe(select(ngrxSelectors.selectUsersAll));
  loading$ = this.store.pipe(select(ngrxSelectors.selectLoading));
  selectedId$ = this.store.pipe(select(ngrxSelectors.selectSelectedId));
  isSelected$ = this.store.pipe(select(ngrxSelectors.selectIsSelected));
  selectedUser$ = this.store.pipe(select(ngrxSelectors.selectSelectedUser));
  savingUser$ = this.store.pipe(select(ngrxSelectors.selectIsSavingUser));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  loadUsers() {
    this.store.dispatch(loadNgrxUsers());
  }

  onUserSelect(id: UserId) {
    this.store.dispatch(selectUser({id}));
  }

  onUserUpdate(user: User) {
    this.store.dispatch(updateUser({user}));
  }
  onAddUser(user: User) {
    this.store.dispatch(addUser({user}));
  }
}
