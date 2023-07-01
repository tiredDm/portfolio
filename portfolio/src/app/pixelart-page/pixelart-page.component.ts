import { Component } from '@angular/core';

@Component({
  selector: 'app-pixelart-page',
  template: `
  
  <app-card-stack [values] = "esvalues" ></app-card-stack>
  <app-card-stack [gradient] = "dndgradient"></app-card-stack>

  `,
  styles: [
    ' ',  
  ]
})
export class PixelartPageComponent {
  esvalues:Array<[String, String, String]> = [['Enemy Melee Sprite','assets/img/pixelart/melee.png','This was the first Enemy Sprite Made for the game.'], ['Melee Sprite Side','assets/img/pixelart/meleeSide.png','The Initial Side View for the Melee Sprite.'], ['Melee Sprite Back','assets/img/pixelart/meleeback.png','This is the back of the Sprite'], ['Enemy Ranged Sprite','assets/img/pixelart/range.png', 'I Tried to create another form of eldritch horror in armor that was more gooey for this design.'],['Range Sprite Side','assets/img/pixelart/RangeSide.png',''],['Range Sprite Back','assets/img/pixelart/RangeBack.png',''],['Enemy Tank Sprite','assets/img/pixelart/tank.png',''],['Tank Sprite Side','assets/img/pixelart/tankside_flip.png',''],['Tank Sprite Back','assets/img/pixelart/tankback.png',''],['Armour','assets/img/pixelart/Armour.png',''],['Sword','assets/img/pixelart/baseSword.png',''],  ];
  estitles = "";
  esgradient = "";

  dndvalues = "";
  dndtitles = "";
  dndgradient = "linear-gradient(13deg, rgba(52,9,112,1) 19%, rgba(190,26,26,1) 75%)";
  
  miscvalues = "";
}
