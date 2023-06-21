import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-icon',
  template: `

<div class = "icon-space">

  <div  class="icon-base">
   <a href={{link}} target="_blank">
        <img class = "icon" src={{image1loc}}>
   </a>
    
  </div>

  <div class="icon-light">
    <a href={{link}} target="_blank">
        <img class = "icon" src={{image2loc}}>
    </a>
    
  </div>
</div>
  `,
  styles: [
    '.icon-base{opacity:1; width:6vh; height:7vh;position: absolute;transition: all 0.6s ease 0s; }',
    '.icon-light{opacity:0;width:6vh; height:7vh;position: absolute;transition: all 0.6s ease 0s; }',
    '.icon-light:hover{opacity:1}',
    '.icon{width:5vh; height:6vh; }',
    '.icon-space{position:relative}',
    '.icon-space:hover .icon-base{opacity:0}'
  ],
  

})
export class LinkIconComponent {
  
  @Input () public image1loc = "assets/img/icons/pin1.png";
  @Input () public image2loc: string = "";
  @Input () link:string="";
  @Input ( ) message: string = ""; 
  constructor () {}
}
