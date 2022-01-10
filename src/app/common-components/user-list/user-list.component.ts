import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User, UserId} from "../../users-service/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  @Input()
  users: User[] | null = [];

  @Input()
  selectedUserId: UserId | null = null;

  @Output()
  select = new EventEmitter<UserId>();

  constructor() { }

  ngOnInit(): void {
  }

  onUserClick(user: User) {
    this.select.emit(user.id);
  }

  isUserSelected(user: User) {
    return this.selectedUserId === user.id;
  }

  trackById(index: number, user: User): UserId {
    return user.id;
  }
}
