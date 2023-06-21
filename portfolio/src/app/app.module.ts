import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PixelartCardComponent } from './pixelartCard/pixelart-card.component';
import { LinkIconComponent } from './link-icon/link-icon.component';
import { LowbarComponent } from './lowbar/lowbar.component';

@NgModule({
  declarations: [
    AppComponent
  , PixelartCardComponent, LinkIconComponent, LowbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
