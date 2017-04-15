import { Component, Input } from '@angular/core';

import { Randomizer } from '../move';

@Component({
  selector: 'ap-move-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements Input {
  @Input() data: Randomizer;
  constructor() { }
}
