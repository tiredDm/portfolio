import { Component } from '@angular/core';

@Component({
  selector: 'app-drogheda-map',
  template: `
  <p>drogheda-map works!</p>
  
  <div class = "page-layout">
  <a routerLink = "redrock"> Redrock </a>
  <a routerLink = "dozehaven"> DozeHaven </a>
  <a routerLink = "rimouth"> Rimouth </a>
  <a routerLink = "forktown"> Forktown </a>
  <a routerLink = "riveride"> Riveride </a>
  <a routerLink = "orchidring"> OrchidRing </a>
  <a routerLink = "forreson"> Forreson </a>
  <a routerLink = "hopeton"> Hopeton </a>


    <div class = "map-card">
      <div class = "map-layout">
        <img class = "drogheda-map" src= "assets/img/maps/drogheda-map.png">
        
      </div>
    </div> 
  </div>


  `,
  styles: [
    '.page-layout{display: flex; align-items:center; justify-content:center}',
    '.map-card{height:75vh; width: 52vw;  background-color: #3b3832; display: flex; align-items:center; justify-content:center; }',
    '.map-layout{height: 70vh; width: 44vw; position: relative}',
    '.drogheda-map{height: 100%; width: 100%;}', 
    '.drogheda-button{position: absolute; left: 22%; top: 27%;background-color: #bbb; color: #bbb; border-radius: 50%; border: 0px solid #49b51f}',
  ]
})
export class DroghedaMapComponent {}
