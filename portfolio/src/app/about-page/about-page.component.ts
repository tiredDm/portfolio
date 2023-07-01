import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
  <div class = "layout">
    <div class = "container">
      <div class = "page-info">
        <h3>Pixel Art</h3>
        <p>This page is a simple collection of pixel art created for various projects.</p>
      </div>
      
      <div class = "page-info">
        <h3>Map</h3>
        <p>The Map page consists of a large map I've drawn for a side project I've worked on. it consists of several smaller links that take the user to other drawn maps.</p>
      </div>

      <div class = "page-info">
        <h3>Projects</h3>
        <p>The Project Page is filled with descriptions of personal projects and has links to them.</p>
      </div>

      <div class = "about">
        <p>Hi I'm Rohan Prithiviraj Balaji. I have skill in software development, web development, writing, and art.</p>   
      </div>
    </div>


  </div>
  
  
  
  `,
  styles: [ 
    '.container{color:white; margin-top: 14vh; font-family: sans-serif; display: grid; grid-template-rows: 45vh 15vh; grid-template-columns: 20vw 20vw 20vw; gap: 5vw}', 
    '.layout{display: grid; place-items: center}',
    '.page-info{background: #3b3832; padding: 15px; border-radius: 15px}',
    '.about{background: #3b3832; padding: 15px; border-radius: 15px; grid-row-start:2; grid-row-end:3; grid-column-start:1;grid-column-end:4}'
  ]
})
export class AboutPageComponent {}
