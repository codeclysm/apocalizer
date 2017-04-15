import { Component, Input } from '@angular/core';

import { Move } from './move';

@Component({
  selector: 'ap-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css'],
})
export class MoveComponent {
  @Input() move: Move;

  constructor() { }
}
