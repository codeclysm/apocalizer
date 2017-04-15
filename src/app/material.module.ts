import { NgModule } from '@angular/core';

import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';



@NgModule({
  imports: [MdCardModule, MdGridListModule],
  exports: [MdCardModule, MdGridListModule],
})
export class MaterialModule { }