import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})

export class AppComponent {
  public loggedIn : Boolean;

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiPath: 'http://localhost:3000',
      resetPasswordCallback: 'http://localhost:4200/user/change-password'
    });
    this.loggedIn = this._tokenService.userSignedIn();
  }
}
