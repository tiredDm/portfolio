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



@NgModule({
  declarations: [
    AppComponent
  , PixelartCardComponent, LinkIconComponent, LowbarComponent, AboutPageComponent, PixelartPageComponent, MapPageComponent, ProjectsPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
