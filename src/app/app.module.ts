///<reference path="../../node_modules/angular2-google-maps/core/core-module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { StationListComponent } from './components/content_components/station.list.component';
import { StationListItemComponent } from './components/content_components/station.list.item.component';
import { StationCardComponent } from './components/content_components/station.card.component';
import { MapComponent } from  './components/content_components/map.component';

import { SignInComponent } from './components/auth_components/sign.in.component';
import { SignUpComponent } from './components/auth_components/sign.up.component';

import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
		MaterialModule.forRoot(),
		routing,
    AgmCoreModule.forRoot()
  ],
	declarations: [
    AppComponent,
		StationListComponent,
		StationCardComponent,
    StationListItemComponent,
    MapComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})

export class AppModule { }
