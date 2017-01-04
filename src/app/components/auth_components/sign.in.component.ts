import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ViewEncapsulation } from '@angular/core';
import {SignUpComponent} from "./sign.up.component";
import {AuthComponent} from "./auth.component";
import {Router} from "@angular/router";

@Component({
  selector: 'sign-in',
  templateUrl: 'html/sign.in.component.html',
  styleUrls: ['css/auth.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class SignInComponent extends AuthComponent {
  public error : Boolean;
  public errorMessage : String;
  private user : Object;

  constructor(tokenService: Angular2TokenService, private router: Router) {
    super(tokenService);
    this.user = {
      email: "",
      password: ""
    }
  }

  private handleSuccess() {
    this.router.navigate(['/map']);
  }

  submit() {
    this.tokenService.signIn({
      email: this.user['email'],
      password: this.user['password']
    }).subscribe(
      res => this.handleSuccess(),
      error => console.log(error)
    )
  }
}
