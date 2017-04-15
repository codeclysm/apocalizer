import { Component, Input } from '@angular/core';

import { Trigger } from '../move';

@Component({
  selector: 'ap-move-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css']
})
export class TriggerComponent implements Input {
  @Input() data: Trigger;
  constructor() { }

}
