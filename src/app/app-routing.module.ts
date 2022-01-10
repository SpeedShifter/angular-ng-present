import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {promisesWayPaths} from "./promises-way/promises-way-paths";
import {ngrxWayPaths} from "./ngrx-way/ngrx-way-paths";
import {rxjsWayPaths} from "./rxjs-way/rxjs-way-paths";

const routes: Routes = [
  {path: '', redirectTo: promisesWayPaths.main, pathMatch: 'full'},
  {
    path: promisesWayPaths.main,
    loadChildren: () => import('./promises-way/promises-way.module').then(m => m.PromisesWayModule)
  },
  { path: ngrxWayPaths.main, loadChildren: () => import('./ngrx-way/ngrx-way.module').then(m => m.NgrxWayModule) },
  { path: rxjsWayPaths.main, loadChildren: () => import('./rxjs-way/rxjs-way.module').then(m => m.RxjsWayModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
