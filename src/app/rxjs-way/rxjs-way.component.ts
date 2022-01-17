import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {User, UserId} from "../users-service/user.model";
import {UsersServiceService} from "../users-service/users-service.service";

@Component({
  selector: 'app-rxjs-way',
  templateUrl: './rxjs-way.component.html',
  styleUrls: ['./rxjs-way.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsWayComponent implements OnInit, OnDestroy {

  constructor(private usersServiceService: UsersServiceService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  loadUsers() {
  }

  onUserSelect(userId: UserId) {
  }

  onUserUpdate(user: User) {
  }

  onAddUser(user: User) {
  }
}
