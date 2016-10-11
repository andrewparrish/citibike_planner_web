import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StationListComponent } from './components/station.list.component';
import { StationComponent } from './components/station.component';

import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		MaterialModule.forRoot(),
		routing
  ],
	declarations: [
    AppComponent,
		StationListComponent,
		StationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
