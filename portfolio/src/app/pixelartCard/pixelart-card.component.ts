import { Component } from '@angular/core';

@Component({
  selector: 'app-pixelart-card',
  template: `
  <div class = "card">
    <img src="assets/img/pixelart1.png" class = "image">
    
    <p class="cardName">pixelart-card Name</p>
    <h1 class ="tooltip">...
      <span class="tooltiptext"> Tool Tip Text </span>
    </h1>
  </div> 
 
  `,
  styles: [
    '.card {color: white; border: 7px solid grey; box-sizing: border-box; border-radius: 25px; aspect-ratio: 5/6; width: 12%; display: flex; flex-direction:column; justify-content:center; text-align:center; background-color: #3b3832; transition: all .2s ease;}',
    '.image{padding: 5px; width: 75%; margin-left: auto; margin-right: auto; filter: grayscale(100%);}',
    '.cardName{padding: 0px; margin: 0px; margin-top: 10px}',
    '.info{padding: 0px; margin: 0px}',
    '.card:hover {border: 5px solid #49b51f; color:#49b51f; width: 13%}',
    '.card:hover .image{filter: grayscale(0%);}',
    '.tooltip .tooltiptext {visibility: hidden; background-color: black;color: #fff;border-radius: 6px; width: 120px; bottom: 100%; left: 50%; margin-left: -60px; position: absolute;z-index: 1;}',
    '.tooltip:hover .tooltiptext{visibility: visible;}'
    
  ]
})
export class PixelartCardComponent {}
