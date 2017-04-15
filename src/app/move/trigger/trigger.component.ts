import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Trigger } from '../move';

@Component({
  selector: 'ap-move-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css'],
  animations: [
    trigger('content', [
      state('inactive', style({
        opacity: '1'
      })),
      state('hover',   style({
        opacity: '1'
      })),     
      state('edit',   style({
        opacity: '0.5'
      })),
      transition('inactive <=> hover', animate('200ms ease-in')),
      transition('hover <=> edit', animate('200ms ease-out')),
      transition('edit <=> inactive', animate('200ms ease-out')),
    ]),
    trigger('flyInOut', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('0.2s ease-in')
      ])
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
