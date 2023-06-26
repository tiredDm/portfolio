import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { PixelartPageComponent } from './pixelart-page/pixelart-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { DroghedaMapComponent } from './drogheda-map/drogheda-map.component';
import { DroghedaDozehavenComponent } from './drogheda-dozehaven/drogheda-dozehaven.component';
import { DroghedaForktownComponent } from './drogheda-forktown/drogheda-forktown.component';
import { DroghedaForresonComponent } from './drogheda-forreson/drogheda-forreson.component';
import { DroghedaHopetonComponent } from './drogheda-hopeton/drogheda-hopeton.component';
import { DroghedaOrchidringComponent } from './drogheda-orchidring/drogheda-orchidring.component';
import { DroghedaRedrockComponent } from './drogheda-redrock/drogheda-redrock.component';
import { DroghedaRiverideComponent } from './drogheda-riveride/drogheda-riveride.component';
import { DroghedaRimouthComponent } from './drogheda-rimouth/drogheda-rimouth.component';

const routes: Routes = [
  {path: 'About',   component: AboutPageComponent, data: {order : '3'} }, 
  {path:'Map',      component: MapPageComponent, data: { order : '1'}  },
  {path:'Map/drogheda',             component: DroghedaMapComponent, data: {order : '4'}},
  {path:'Map/drogheda/redrock',     component: DroghedaRedrockComponent, data: {order : '7'} },
  {path:'Map/drogheda/dozehaven',   component: DroghedaDozehavenComponent, data: {order : '7'}},
  {path:'Map/drogheda/rimouth',     component: DroghedaRimouthComponent, data: {order : '7'}},
  {path:'Map/drogheda/forktown',    component: DroghedaForktownComponent, data: {order : '7'}},
  {path:'Map/drogheda/riveride',    component: DroghedaRiverideComponent, data: {order : '7'}},
  {path:'Map/drogheda/orchidring',  component: DroghedaOrchidringComponent, data: {order : '7'}},
  {path:'Map/drogheda/forreson',    component: DroghedaForresonComponent, data: {order : '7'}},
  {path:'Map/drogheda/hopeton',     component: DroghedaHopetonComponent, data: {order : '7'}},
  {path: 'Projects',component: ProjectsPageComponent, data: {order : '2'} },
  {path: '' ,       component: ProjectsPageComponent},
  {path: 'PixelArt',component: PixelartPageComponent, data: { order : '0' } }];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
