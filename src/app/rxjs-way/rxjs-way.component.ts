import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, exhaustMap, from, map, Observable, Subject, takeUntil} from "rxjs";
import {User, UserId} from "../users-service/user.model";
import {UsersServiceService} from "../users-service/users-service.service";

@Component({
  selector: 'app-rxjs-way',
  templateUrl: './rxjs-way.component.html',
  styleUrls: ['./rxjs-way.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsWayComponent implements OnInit, OnDestroy {

  users$ = new BehaviorSubject<User[]>([]);
  selectedId$ = new BehaviorSubject<UserId | null>(null);
  loading$ = new BehaviorSubject<boolean>(false);
  savingUser$ = new BehaviorSubject<boolean>(false);

  isSelected$ = this.selectedId$.pipe(map(id => !!id));
  selectedUser$: Observable<User | null> = combineLatest([this.selectedId$, this.users$])
    .pipe(map(([selectedId, users]) => {
      return users.find(u => u.id === selectedId) || null;
    }));

  private loadUsers$ = new Subject<void>();
  private destroyed$ = new Subject<void>();

  constructor(private usersServiceService: UsersServiceService) { }

  ngOnInit(): void {
    this.loadUsers$
      .pipe(
        exhaustMap(() => {
          this.loading$.next(true);
          return from(this.usersServiceService.getUsers());}),
        takeUntil(this.destroyed$)
      )
      .subscribe(users => {
        this.loading$.next(false);
        this.users$.next(users);
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  loadUsers() {
    this.loadUsers$.next();
  }

  onUserSelect(userId: UserId) {
    this.selectedId$.next(userId);
  }

  onUserUpdate(user: User) {
    this.savingUser$.next(true);
    from(this.usersServiceService.updateUser(user))
      .subscribe({
        next: (updated) => {
          const users = [...this.users$.value];
          const index = users.findIndex(u => u.id === user.id);
          if (index >= 0) {
            users.splice(index, 1, updated)
          } else {
            users.push(updated);
          }
          this.users$.next(users);
        },
        error: () => {},
        complete: () => {
          this.savingUser$.next(false);
        }
      });
  }

  onAddUser(user: User) {
    this.savingUser$.next(true);
    from(this.usersServiceService.addUser(user))
      .subscribe({
        next: (added) => {
          this.users$.next([...this.users$.value, added]);
        },
        error: () => {},
        complete: () => {
          this.savingUser$.next(false);
        }
      });
  }
}
