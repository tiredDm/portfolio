import { Component } from '@angular/core';

@Component({
  selector: 'app-map-page',
  template: `
  
  

  <div class = "page-layout">


    <div class = "map-card">
      <div class = "map-layout">
        <img class = "map" src= "assets/img/maps/Miria.png">
        
        <a routerLink = "drogheda"  class = "drogheda-button"> == </a> 
      </div>
    </div> 
  </div>
  `,
  styles: [
    '.page-layout{display: grid; place-items: center}',
    '.map-card{height:75vh; width: 52vw;  background-color: #3b3832; display: flex; align-items:center; justify-content:center; margin-top: 50px }',
    '.map-layout{height: 70vh; width: 44vw; position: relative}',
    '.map{height: 100%; width: 100%;}', 
    '.drogheda-button{position: absolute; left: 23%; top: 23%;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 5px solid #3b3832}',
  ]
})
export class MapPageComponent {}
