import { Component } from '@angular/core';

@Component({
  selector: 'app-drogheda-rimouth',
  template: `<p>drogheda-rimouth works!</p>
  <div class = "page-layout">
    <div class = "map-card">
      <div class = "map-layout">
        <img class = "map" src= "assets/img/maps/Rimouth-map.png">
      </div>
    </div> 
  </div>
  
  `,
  styles: [
    '.page-layout{display: grid; place-items: center}',
    '.map-card{height:75vh; width: 52vw;  background-color: #3b3832; display: flex; align-items:center; justify-content:center; }',
    '.map-layout{height: 70vh; width: 44vw; position: relative}',
    '.map{height: 100%; width: 100%;}', 
  
  ]
})
export class DroghedaRimouthComponent {}
