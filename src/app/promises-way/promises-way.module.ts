import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromisesWayComponent} from "./promises-way.component";
import {PromisesWayRoutingModule} from "./promises-way-routing.module";
import {CommonComponentsModule} from "../common-components/common-components.module";


@NgModule({
  declarations: [
    PromisesWayComponent
  ],
  imports: [
    CommonModule,
    PromisesWayRoutingModule,
    CommonComponentsModule
  ]
})
export class PromisesWayModule { }
