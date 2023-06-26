import { Component } from '@angular/core';

@Component({
  selector: 'app-drogheda-map',
  template: `
  <p>drogheda-map works!</p>
  
  <div class = "page-layout">
  
  
  


    <div class = "map-card">
      <div class = "map-layout">
        <img class = "drogheda-map" src= "assets/img/maps/drogheda-map.png">
        <a routerLink = "redrock"   class = "redrock"> == </a>
        <a routerLink = "dozehaven" class = "dozehaven" > == </a>
        <a routerLink = "rimouth"   class = "rimouth" > == </a>
        <a routerLink = "forktown"  class = "forktown"> == </a>
        <a routerLink = "riveride"  class = "riveride"> == </a>
        <a routerLink = "forreson"  class = "forreson"> == </a>
        <a routerLink = "hopeton"   class = "hopeton"> == </a>
        <a routerLink = "orchidring"class = "orchidring"> == </a>
      </div>
    </div> 
  </div>


  `,
  styles: [
    '.page-layout{display: flex; align-items:center; justify-content:center}',
    '.map-card{height:75vh; width: 52vw;  background-color: #3b3832; display: flex; align-items:center; justify-content:center; }',
    '.map-layout{height: 70vh; width: 44vw; position: relative}',
    '.drogheda-map{height: 100%; width: 100%;}', 
    '.redrock{position: absolute; right: 33%; top: 27% ;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 3px solid #3b3832}',
    '.dozehaven{position: absolute; right: 34%; top: 21% ;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 3px solid #3b3832}',
    '.rimouth{position: absolute; right: 48%; top: 35% ;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 3px solid #3b3832}',
    '.forktown{position: absolute; left: 48%; bottom: 18% ;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 3px solid #3b3832}',
    '.riveride{position: absolute; left: 19%; top: 49% ;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 3px solid #3b3832}',
    '.forreson{position: absolute; left: 27%; bottom: 30% ;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 3px solid #3b3832}',
    '.hopeton{position: absolute; left: 40%; bottom: 26% ;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 3px solid #3b3832}',
    '.orchidring{position: absolute; left: 33%; top: 49% ;background-color: #3b3832; color: #3b3832; border-radius: 50%; border: 3px solid #3b3832}',
    '.redrock:hover{border-color:  #f3f1f1}',
  ]
})
export class DroghedaMapComponent {}
