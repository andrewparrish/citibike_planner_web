import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationListComponent } from './components/station.list.component';
import { MapComponent } from './components/map.component';

import { AppComponent } from './app.component';

export const routes: Routes = [
	{ path: 'stations', component: StationListComponent },
  { path: 'map', component: MapComponent }
  //{ path: '', component: AppComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
