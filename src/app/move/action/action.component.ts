import { Component, Input } from '@angular/core';

import { Action } from '../move';

@Component({
  selector: 'ap-move-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent{
  @Input() data: Action;
  constructor() { }

}
