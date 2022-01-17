import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {User, UserId} from "../users-service/user.model";

@Component({
  selector: 'app-ngrx-way',
  templateUrl: './ngrx-way.component.html',
  styleUrls: ['./ngrx-way.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxWayComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  loadUsers() {
  }

  onUserSelect(id: UserId) {
  }

  onUserUpdate(user: User) {
  }

  onAddUser(user: User) {
  }
}
