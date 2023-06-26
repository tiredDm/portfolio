import { trigger, animate, transition, style, group, query } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  // Transition between any two states
  

  transition('* => 0' , slideToLeft()), 
  transition('2 => 1' , slideToLeft()), 
  transition('3 => 2' , slideToLeft()), 
  transition('3 => 1' , slideToLeft()),

  transition('0 => 1', slideToRight()), 
  transition('1 => 2', slideToRight()), 
  transition('0 => 2', slideToRight()),
  transition('* => 3', slideToRight()),

  transition('1 => 4' ,slideUp()), 
  transition('4 => 7', slideUp()),
  transition('4 => 1', slideDown()),
  transition('7 => *', slideDown())

]);

function slideToRight(){
    return [
        query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
        group([
            query(':enter', [
              style({ transform: 'translateX(100%)' }),
              animate('0.6s ease', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('0.6s ease', style({ transform: 'translateX(-100%)' }))
            ], { optional: true })
          ])

    ];
}

function slideToLeft(){
    return  [
        query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.6s ease', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.6s ease', style({ transform: 'translateX(100%)' }))
          ], { optional: true })
        ])
      ];
}

function slideUp(){
  return  [
      query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(-150%)' }),
          animate('0.6s ease', style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.6s ease', style({ transform: 'translateY(150%)' }))
        ], { optional: true })
      ])
    ];
}

function slideDown(){
  return [
      query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
      group([
          query(':enter', [
            style({ transform: 'translateY(150%)' }),
            animate('0.6s ease', style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.6s ease', style({ transform: 'translateY(-150%)' }))
          ], { optional: true })
        ])

  ];
}