import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: 'html/sign.up.component.html',
  styleUrls: ['css/auth.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class SignUpComponent {
  public error : Boolean;
  public errorMessage : String;

  private user : Object;

  constructor(private _tokenService: Angular2TokenService) {
    this.error = false;
    this.errorMessage = "";
    this.user = {
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  submit() {
    this._tokenService.registerAccount({
      email: this.user['email'],
      password: this.user['password'],
      passwordConfirmation: this.user['passwordConfirmation']
    }).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }
}
