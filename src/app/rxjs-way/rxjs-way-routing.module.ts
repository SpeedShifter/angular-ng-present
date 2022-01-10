import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsWayComponent } from './rxjs-way.component';

const routes: Routes = [{ path: '', component: RxjsWayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsWayRoutingModule { }
