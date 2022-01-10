import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListModule} from "./user-list/user-list.module";
import {UserListItemModule} from "./user-list-item/user-list-item.module";
import {UserEditModule} from "./user-edit/user-edit.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserListModule,
    UserListItemModule,
    UserEditModule
  ],
  exports: [
    UserListModule,
    UserListItemModule,
    UserEditModule]
})
export class CommonComponentsModule { }
