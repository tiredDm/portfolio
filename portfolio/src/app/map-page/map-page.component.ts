import { Component } from '@angular/core';

@Component({
  selector: 'app-map-page',
  template: `
  
  <p>map-page works!</p>

  <div class = "page-layout">
    <div class = "map-card">
      <img class = "miria-map" src= "assets/img/maps/Miria.png">
    </div> 
  </div>
  `,
  styles: [
    '.page-layout{display: flex; align-items:center; justify-content:center}',
    '.map-card{height:75vh; width: 52vw;  background-color: #3b3832; display: flex; align-items:center; justify-content:center; }',
    '.miria-map{height: 70vh; width: 50vw;}'
  ]
})
export class MapPageComponent {}
