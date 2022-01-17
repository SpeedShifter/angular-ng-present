import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../users-service/users-service.service";
import {User, UserId} from "../users-service/user.model";

@Component({
  selector: 'app-promises-way',
  templateUrl: './promises-way.component.html',
  styleUrls: ['./promises-way.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromisesWayComponent implements OnInit {

  constructor(private usersServiceService: UsersServiceService,
              private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  loadUsers() {
  }

  onUserSelect(userId: UserId) {
  }

  hasSelectedUser() {
  }

  getSelectedUser() {
  }

  onUserUpdate(user: User) {
  }

  onAddUser(user: User) {
  }
}
