import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationListComponent } from './components/station.list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
	{ path: 'stations', component: StationListComponent }
  //{ path: '', component: AppComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
