import { Component, Input } from '@angular/core';

import { Animations } from '../animations';
import { Trigger } from '../move';

@Component({
  selector: 'ap-move-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css'],
  animations: [
    Animations.Dim,
    Animations.FadeIn,
  ]
})
export class TriggerComponent implements Input {
  @Input() data: Trigger;
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
