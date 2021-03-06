import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationListComponent } from './components/content_components/station.list.component';
import { MapComponent } from './components/content_components/map.component';

import { SignInComponent } from './components/auth_components/sign.in.component';
import { SignUpComponent } from './components/auth_components/sign.up.component';
import { AppComponent } from './app.component';
import {ForgotPasswordComponent} from "./components/auth_components/forgot.password.component";
import {ChangePasswordComponent} from "./components/auth_components/change.password.component";

export const routes: Routes = [
	{ path: 'stations', component: StationListComponent },
  { path: 'map', component: MapComponent },
  { path: 'user/sign-in', component: SignInComponent },
  { path: 'user/sign-up', component: SignUpComponent },
  { path: 'user/forgot-password', component: ForgotPasswordComponent },
  { path: 'user/change-password', component: ChangePasswordComponent },
  { path: '', component: AppComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
