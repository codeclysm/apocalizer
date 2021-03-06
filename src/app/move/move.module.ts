import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { MoveComponent } from './move.component';
import { ActionComponent } from './action/action.component';
import { BranchComponent } from './branch/branch.component';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { TriggerComponent } from './trigger/trigger.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
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
