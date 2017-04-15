import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    }
  ]
}
