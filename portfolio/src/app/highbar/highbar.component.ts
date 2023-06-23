import { Component } from '@angular/core';

@Component({
  selector: 'app-highbar',
  template: `
    <a routerLink = "PixelArt" > PixelArt </a>
    <a routerLink = "Map"> Maps </a>
    <a routerLink = "Projects"> Projects </a>
    <a routerLink = "About"> About </a>
  `,
  styles: [
  ]
})
export class HighbarComponent {}
