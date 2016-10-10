import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { StationListComponent } from './components/station.list.component';

@NgModule({
  declarations: [
    AppComponent,
		StationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		MaterialModule.forRoot(),
		RouterModule.forRoot([
			{ path: '', component: AppComponent },
			{ path: 'stations', component: StationListComponent }
		])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
