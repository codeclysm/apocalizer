import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { MoveComponent } from './move.component';
import { ActionComponent } from './action/action.component';
import { BranchComponent } from './branch/branch.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { TriggerComponent } from './trigger/trigger.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MarkdownToHtmlModule,
  ],
  declarations: [
    MoveComponent,
    ActionComponent,
    BranchComponent,
    RandomizerComponent,
    TriggerComponent,
  ],
  exports: [
    MoveComponent,
  ]
})
export class MoveModule { }
