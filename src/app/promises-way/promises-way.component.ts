import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UsersServiceService} from "../users-service/users-service.service";
import {User, UserId} from "../users-service/user.model";

@Component({
  selector: 'app-promises-way',
  templateUrl: './promises-way.component.html',
  styleUrls: ['./promises-way.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromisesWayComponent implements OnInit {

  selectedId: UserId | null = null;
  users: User[] = [];
  loading: boolean = false;

  savingUser: boolean = false;

  constructor(private usersServiceService: UsersServiceService,
              private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  loadUsers() {
    this.loading = true;
    this.usersServiceService.getUsers().then((users) => {
      this.users = users;
      this.loading = false;
      this.changeDetection.markForCheck();
    });
  }

  onUserSelect(userId: UserId) {
    this.selectedId = userId;
  }

  hasSelectedUser(): boolean {
    return !!this.selectedId;
  }

  getSelectedUser(): User | null {
    return this.users?.find(u => u.id === this.selectedId) || null;
  }

  onUserUpdate(user: User) {
    this.savingUser = true;
    this.usersServiceService.updateUser(user)
      .then((updated) => {
        const index = this.users.findIndex(u => u.id === updated.id);
        if (index >= 0) {
          this.users = [...this.users];
          this.users.splice(index, 1, updated);
        }
      })
      .finally(() => {
        this.savingUser = false;
        this.changeDetection.markForCheck();
      });
  }

  onAddUser(user: User) {
    this.savingUser = true;
    this.usersServiceService.addUser(user)
      .then((added) => {
        // this.users.push(added);
        this.users = [...this.users, added];
      })
      .finally(() => {
        this.savingUser = false;
        this.changeDetection.markForCheck();
      });
  }
}
