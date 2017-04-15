import { trigger, state, style, animate, transition } from '@angular/animations';

export class Animations {
    public static Dim = trigger('dim', [
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
    ]);
    
    public static FadeIn = trigger('fadeIn', [
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
}