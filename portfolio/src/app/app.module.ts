import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PixelartCardComponent } from './pixelartCard/pixelart-card.component';
import { LinkIconComponent } from './link-icon/link-icon.component';
import { LowbarComponent } from './lowbar/lowbar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PixelartPageComponent } from './pixelart-page/pixelart-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HighbarComponent } from './highbar/highbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import 'hammerjs';
import { DroghedaMapComponent } from './drogheda-map/drogheda-map.component';
import { DroghedaRedrockComponent } from './drogheda-redrock/drogheda-redrock.component';
import { DroghedaDozehavenComponent } from './drogheda-dozehaven/drogheda-dozehaven.component';
import { DroghedaRimouthComponent } from './drogheda-rimouth/drogheda-rimouth.component';
import { DroghedaForktownComponent } from './drogheda-forktown/drogheda-forktown.component';
import { DroghedaRiverideComponent } from './drogheda-riveride/drogheda-riveride.component';
import { DroghedaOrchidringComponent } from './drogheda-orchidring/drogheda-orchidring.component';
import { DroghedaForresonComponent } from './drogheda-forreson/drogheda-forreson.component';
import { DroghedaHopetonComponent } from './drogheda-hopeton/drogheda-hopeton.component';

@NgModule({
  declarations: [
    AppComponent
  , PixelartCardComponent, LinkIconComponent, LowbarComponent, AboutPageComponent, PixelartPageComponent, MapPageComponent, ProjectsPageComponent, HighbarComponent, DroghedaMapComponent, DroghedaRedrockComponent, DroghedaDozehavenComponent, DroghedaRimouthComponent, DroghedaForktownComponent, DroghedaRiverideComponent, DroghedaOrchidringComponent, DroghedaForresonComponent, DroghedaHopetonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTooltipModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
