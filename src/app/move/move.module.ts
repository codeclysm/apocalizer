import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { MoveComponent } from './move.component';
import { ActionComponent } from './action/action.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { TriggerComponent } from './trigger/trigger.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    MoveComponent,
    ActionComponent,
    RandomizerComponent,
    TriggerComponent,
  ],
  exports: [
    MoveComponent,
  ]
})
export class MoveModule { }
