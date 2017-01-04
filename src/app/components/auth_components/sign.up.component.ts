import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ViewEncapsulation } from '@angular/core';
import {AuthComponent} from "./auth.component";

@Component({
  selector: 'sign-up',
  templateUrl: 'html/sign.up.component.html',
  styleUrls: ['css/auth.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class SignUpComponent extends AuthComponent{
  private user : Object;

  constructor(tokenService: Angular2TokenService) {
    super(tokenService);
    this.user = {
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  submit() {
    this.tokenService.registerAccount({
      email: this.user['email'],
      password: this.user['password'],
      passwordConfirmation: this.user['passwordConfirmation']
    }).subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }
}
