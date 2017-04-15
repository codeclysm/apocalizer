import { Component, Input } from '@angular/core';

import { Branch } from '../move';

@Component({
  selector: 'ap-move-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent{
  @Input() data: Branch;
  constructor() { }

}
