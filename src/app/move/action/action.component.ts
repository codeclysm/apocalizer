import { Component, Input } from '@angular/core';

import { Action } from '../move';
import { Animations } from '../animations';

@Component({
  selector: 'ap-move-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  animations: [
    Animations.Dim,
    Animations.FadeIn,
  ]
})
export class ActionComponent{
  @Input() data: Action;
  state: string = 'inactive';
  
  mouseover() {
    if (this.state === 'inactive') {
      this.state = 'hover';
    }
  }

  mouseleave() {
    if (this.state === 'hover') {
      this.state = 'inactive';
    }
  }

  edit() {
    if (this.state === 'hover') {
      this.state = 'edit';
    }
  }

  save() {
    if (this.state === 'edit') {
      this.state = 'inactive';
    }
  }
}
