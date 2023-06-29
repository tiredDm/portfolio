import { Component } from '@angular/core';

@Component({
  selector: 'app-highbar',
  template: `
    <div class = "highbar">
      <a routerLink = "PixelArt"  class = "link"> PixelArt </a>
      <a routerLink = "Map"       class = "link"> Maps </a>
      <a routerLink = "Projects"  class = "link"> Projects </a>
      <a routerLink = "About"     class = "link"> About </a>
    </div>
    
  `,
  styles: [
    '.highbar{width:100vw ;height: 6vh; position: fixed ; left: 0px; top: 0px; margin: 0px; padding: 0px; display: flex; flex-direction: row; border: 2px; background-color: #3b3832; z-index: 9; color: white; font-family: sans-serif;align-items: center; border-bottom: 3.5px solid #191a16 }',
    '.link{color: #808080; font-family: sans-serif; text-decoration: none; font-weight: bold; transition: .45s ease; margin-left: 25px}',
    '.link:hover{color: white}'
  ]
})
export class HighbarComponent {}
