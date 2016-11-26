///<reference path="../../node_modules/angular2-google-maps/core/core-module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { StationListComponent } from './components/station.list.component';
import { StationListItemComponent } from './components/station.list.item.component';
import { StationCardComponent } from './components/station.card.component';
import { MapComponent } from  './components/map.component';

import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
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
    MapComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
