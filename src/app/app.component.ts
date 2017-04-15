import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Move } from './move/move';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  animations: [
    trigger('moveStatus', [
      state('inactive', style({
        width: '15%',
      })),
      state('active',   style({
        width: '30%',
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class AppComponent {
  active: string = 'Do something under fire';

  status(move: Move): string {
    if (move.name === this.active) {
      return 'active';
    }
    return 'inactive';
  } 

  activate(move: Move) {
    this.active = move.name;
  }

  moves = [
    {
      name: 'Do something under fire',
      steps: [
        {
          type: 'trigger',
          text: 'When you do something under fire, or dig in to endure fire'
        },
        {
          type: 'randomizer',
          text: 'Roll +Cool',
          results: [
            {
              name: 'success',
              text: 'On a 10+, you do it'
            },
            {
              name: 'partial',
              text: 'On a 7–9, you flinch, hesitate, or stall: the MC can offer you a worse outcome, a hard bargain, or an ugly choice'
            },
            {
              name: 'failure',
              text: 'On a miss, be prepared for the worst.'
            }
          ]
        }
      ]
    },
    {
      name: 'Go aggro on someone',
      steps: [
        {
          type: 'trigger',
          text: 'When you go aggro on someone'
        },
        {
          type: 'randomizer',
          text: 'Roll +Hard',
          results: [
            {
              name: 'success',
              text: 'On a 10+, they have to choose: \n- Force your hand and suck it up\n- Cave and do what you want'
            },
            {
              name: 'partial',
              text: 'On a 7–9, they have to choose: \n- Force your hand and suck it up \n- Cave and do what you want \n- Get the hell out of your way \n- Barricade themselves securely in \n- Give you something they think you want, or tell you what you want to hear \n- Back off calmly, hands where you can see'
            },
            {
              name: 'failure',
              text: 'On a miss, be prepared for the worst.'
            }
          ]
        }
      ]
    },
    {
      name: 'Sucker someone',
      steps: [
        {
          type: 'trigger',
          text: 'When you attack someone unsuspecting or helpless'
        },
        {
          type: 'branch',
          text: 'ask the MC if you could miss',
          branches: [
            'If you could, treat it as going aggro, but your victim has no choice to cave and do what you want',
            'If you couldn’t, you simply inflict harm as established'
          ]
        }
      ]
    },
    {
      name: 'Seduce or manipulate an NPC',
      steps: [
        {
          type: 'trigger',
          text: 'When you try to seduce, manipulate, bluff, fast-talk, or lie to an NPC'
        },
        {
          type: 'action',
          text: 'Give them a reason'
        },
        {
          type: 'randomizer',
          text: 'Roll +Hard',
          results: [
            {
              name: 'success',
              text: 'On a 10+, they’ll go along with you, unless or until some fact or action betrays the reason'
            },
            {
              name: 'partial',
              text: 'On a 7-9, they’ll go along with you, but they need some concrete assurance, corroboration, or evidence first'
            },
            {
              name: 'failure',
              text: 'On a miss, be prepared for the worst.'
            }
          ]
        }
      ]
    },
    {
      name: 'Read a sitch',
      steps: [
        {
          type: 'trigger',
          text: 'When you read a charged situation'
        },
        {
          type: 'randomizer',
          text: 'Roll +Hard',
          results: [
            {
              name: 'success',
              text: 'On a 10+, ask 3'
            },
            {
              name: 'partial',
              text: 'On a 7-9, ask 1'
            },
            {
              name: 'failure',
              text: 'On a miss, ask 1 anyway, but be prepared for the worst.'
            }
          ],          
          details: 'Questions: \n- Where’s my best escape route / way in / way past?\n- Which enemy is most vulnerable to me?\n- Which enemy is the biggest threat?\n- What should I be on the lookout for?\n- What’s my enemy’s true position?\n- Who’s in control here?'
        },
        {
          type: 'action',
          text: 'Whenever you act on one of the MC’s answers, take +1'
        },
      ]
    }
  ]
}
