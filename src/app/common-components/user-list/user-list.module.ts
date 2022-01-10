import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import {UserListItemModule} from "../user-list-item/user-list-item.module";



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserListItemModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
