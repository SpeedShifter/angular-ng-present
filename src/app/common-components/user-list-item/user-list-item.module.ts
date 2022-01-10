import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListItemComponent } from './user-list-item.component';



@NgModule({
  declarations: [
    UserListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListItemComponent
  ]
})
export class UserListItemModule { }
