import { Component } from '@angular/core';

@Component({
  selector: 'app-drogheda-orchidring',
  template: `<p>drogheda-orchidring works!</p>
  <div class = "page-layout">
    <div class = "map-card">
      <div class = "map-layout">
        <img class = "map" src= "assets/img/maps/OrchidRing-map.png">
        <div class = "drogheda-button"> == </div> 
      </div>
    </div> 
  </div>
  
  `,
  styles: [
    '.page-layout{display: grid; place-items: center}',
    '.map-card{height:75vh; width: 52vw;  background-color: #3b3832; display: flex; align-items:center; justify-content:center; }',
    '.map-layout{height: 70vh; width: 44vw; position: relative}',
    '.map{height: 100%; width: 100%;}', 
    '.drogheda-button{position: absolute; left: 22%; top: 27%;background-color: #bbb; color: #bbb; border-radius: 50%; border: 0px solid #49b51f}',

  ]
})
export class DroghedaOrchidringComponent {}
