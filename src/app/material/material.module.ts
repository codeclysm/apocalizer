import { NgModule } from '@angular/core';

import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';


@NgModule({
  imports: [MdButtonModule, MdCardModule, MdInputModule],
  exports: [MdButtonModule, MdCardModule, MdInputModule],
})
export class MaterialModule { }