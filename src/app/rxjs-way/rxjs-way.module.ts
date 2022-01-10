import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsWayRoutingModule } from './rxjs-way-routing.module';
import { RxjsWayComponent } from './rxjs-way.component';
import {CommonComponentsModule} from "../common-components/common-components.module";


@NgModule({
  declarations: [
    RxjsWayComponent
  ],
  imports: [
    CommonModule,
    RxjsWayRoutingModule,
    CommonComponentsModule
  ]
})
export class RxjsWayModule { }
