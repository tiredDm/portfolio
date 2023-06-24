import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { PixelartPageComponent } from './pixelart-page/pixelart-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  {path: 'About',   component: AboutPageComponent, data: {order : '3'} }, 
  {path:'Map',      component: MapPageComponent, data: { order : '1'}  },
  {path: 'Projects',component: ProjectsPageComponent, data: {order : '2'} },
  {path: '' ,       component: ProjectsPageComponent},
  {path: 'PixelArt',component: PixelartPageComponent, data: { order : '0' } }];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
