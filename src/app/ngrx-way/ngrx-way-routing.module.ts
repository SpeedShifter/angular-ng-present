import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxWayComponent } from './ngrx-way.component';

const routes: Routes = [{ path: '', component: NgrxWayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxWayRoutingModule { }
