import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { MaterialModule } from '../material/material.module';

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
    MaterialModule,
    MarkdownToHtmlModule.forRoot(),
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
