import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Trigger } from '../move';

@Component({
  selector: 'ap-move-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css'],
  animations: [
    trigger('stateA', [
      state('inactive', style({
        opacity: '0.8'
      })),
      state('hover',   style({
        opacity: '1'
      })),
      transition('inactive => hover', animate('100ms ease-in')),
      transition('hover => inactive', animate('100ms ease-out')),
    ])
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
