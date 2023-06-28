import { Component } from '@angular/core';
import { LinkIconComponent } from '../link-icon/link-icon.component';


@Component({
  selector: 'app-lowbar',
  template: `
  <div class="lbar">
    <app-link-icon class= "github" [image1loc] = gimageloc1 [image2loc]= gimageloc2 [link] = glink message = message ></app-link-icon>
    <app-link-icon class= "linkedIn" [image1loc] = "limageloc1" [image2loc]=limageloc2 [link] = "llink"></app-link-icon>
    <app-link-icon class= "insta"  [image1loc] = "iimageloc1" [image2loc]=iimageloc2 [link] = "ilink"></app-link-icon>
    <app-link-icon class= "gmail"  [image1loc] = "gmimageloc1" [image2loc]=gmimageloc2 [link] = "gmlink"></app-link-icon>
  </div>
  <div class ="dark"></div>
  `,
  styles: [
    '.lbar{width:100vw ;height: 8vh; position: fixed ; left: 0px; bottom: 0px; margin: 0px; padding: 0px; display: flex; flex-direction: row; border: 2px; background-color: #3b3832; z-index: 9; }', 
    '.github{position: absolute; left: 2vh; top: 10px;}',
    '.linkedIn{position: absolute; left: 10vh; top: 10px}',
    '.insta{position: absolute; left: 18vh; top: 10px}',
    '.gmail{position: absolute; left: 26vh; top: 10px}', 
    '.dark{width: 100vw; height: 99vw; position: fixed; background-color: #191a16; z-index: -1; left: 0px; top: 0px }',
  ]
})
export class LowbarComponent {
  gimageloc1 = "assets/img/icons/pgh1.png";
  gimageloc2 = "assets/img/icons/pgh2.png";
  glink = "https://github.com/tiredDm";
  
  limageloc1 = "assets/img/icons/pin1.png";
  limageloc2 = "assets/img/icons/pin2.png";
  llink = "https://www.linkedin.com/in/rohanpbalaji/";

  iimageloc1 = "assets/img/icons/pinsta1.png";
  iimageloc2 = "assets/img/icons/pinsta2.png";
  ilink = "https://www.instagram.com/dmertist/";

  gmimageloc1 = "assets/img/icons/pgm1.png";
  gmimageloc2 = "assets/img/icons/pgm2.png";
  gmlink = "mailto:ronpri1@gmail.com";

  message = "Does this work?"
}
