import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stack',
  template: `
  <p>card-stack works!</p>
  <!-- We want a.. Title Card, and then all other cards..-->
  <div class = "card-stack">
    
    <div class = "title-card" [style.--gradient]= "gradient">  
      <h2 class = "t title" >   {{titlecard[0]}}  </h2>
      <p class = "t content">   {{titlecard[1]}}  </p>
      <h4 class = "t extra">    {{titlecard[2]}}  </h4>
    </div>  
    
    <div class = "all-cards" >

      <div class = "card" *ngFor = "let item of values">
        <h3> {{item[0]}} </h3>
        <img src= {{item[1]}} class = "image">
        <p>  {{item[2]}}</p>
      </div>
  </div>
  
  `,
  styles: [
    ':root{--gradient: blue;}',
    '.card-stack{position: relative; display:flex; align-items: center; color: white; font-family: sans-serif}',
    '.title-card{height: 325px; width: 250px; left: 0px; border-radius: 20px; display: flex; flex-direction: column; gap: 7px; z-index: 5; background: var(--gradient, grey) ; box-shadow: 10px 0 5px -2px black; }',
    '.t{margin: 0px; margin-left: 10px }',  
    '.title{margin-top:70%}',
    '.all-cards{display:flex; margin-left: 25px}', 
    '.card{height: 300px; width: 200px; background-color: #3b3832; border-radius: 18px; box-shadow: -1rem 0 3rem black; display: flex; flex-direction: column; margin-left: -50px; padding-left: 1.5rem; transition: .2s ease}',
    '.card:hover{ transform: translateY(-40px)}',
    '.card:hover~.card {transform: translateX(130px)}',
    '.card:not(:first-child) {margin-left:-130px}',
    '.image{width: 75%}'
  ]
})
export class CardStackComponent {
  data = ['Pixel Art 1', 'Pixel Art 2', 'Pixel Art 3', 'Pixel Art 4']
  @Input () values:Array<[String, String, String]> =[['Pixel Art 1','assets/img/pixelart/pixelart1.png','This is the example Pixel Art. It is a Skeletal Monster used a Boss Fight.']]; 
  @Input () gradient:String = "linear-gradient(13deg, rgba(60,127,40,1) 0%, rgba(29,65,83,1) 0%, rgba(156,7,143,1) 100%)";
  @Input () titlecard:[String,String,String] = ["Eldritch Seal","These are all assets I made for a game development project that was made with Unity","CMSC 425"]
  constructor() {}
}
