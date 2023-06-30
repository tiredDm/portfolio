import { Component } from '@angular/core';
import { LinkIconComponent } from '../link-icon/link-icon.component';


@Component({
  selector: 'app-projects-page',
  template: `
  <div class = "layout">
    <div class= "container">
      <div class = "project project1">
      <img class = "image" src="assets/img/attackManagement.png">
        <div class="written-content">
          <a href = "https://github.com/tiredDm/AttackManagement" class = "link" ><h4> Attack Management System</h4> </a>
          <p> A flask framework and mongodb based website with user and database functionality. </p>
        </div>
      </div>

    </div>
  </div>  
  `,
  styles: [ 
    '.container{color: white; margin-top: 14vh; display: grid; grid-template-rows: 50vh 50vh ; grid-template-columns: 20vw 20vw 20vw 20vw; gap: 5vw}',
    '.project{background-color: #3b3832; border-radius: 20px; overflow: hidden; font-family: sans-serif}', 
    '.layout{display: grid; place-items: center}', 
    '.image{width: 100%; height: 45%;}',
    '.written-content{margin-right: 10px; margin-left: 10px}', 
    '.link{color: #808080; transition: .45s ease }', 
    '.link:hover{color: white}'
  ]
})
export class ProjectsPageComponent {}
