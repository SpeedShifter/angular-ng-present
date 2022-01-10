import {RouterModule, Routes} from "@angular/router";
import {PromisesWayComponent} from "./promises-way.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: PromisesWayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromisesWayRoutingModule { }
