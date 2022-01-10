import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxWayRoutingModule} from './ngrx-way-routing.module';
import {NgrxWayComponent} from './ngrx-way.component';
import {StoreModule} from "@ngrx/store";
import {ngrxUsersFeatureKey, ngrxUsersReducer} from "./store/ngrx-users.reducer";
import {EffectsModule} from "@ngrx/effects";
import {NgrxUsersEffects} from "./store/ngrx-users.effects";
import {CommonComponentsModule} from "../common-components/common-components.module";


@NgModule({
  declarations: [
    NgrxWayComponent
  ],
  imports: [
    CommonModule,
    NgrxWayRoutingModule,
    CommonComponentsModule,
    StoreModule.forFeature(ngrxUsersFeatureKey, ngrxUsersReducer),
    EffectsModule.forFeature([NgrxUsersEffects])
  ]
})
export class NgrxWayModule {
}
