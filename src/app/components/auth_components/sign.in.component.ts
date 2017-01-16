import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ViewEncapsulation } from '@angular/core';
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

  constructor(private _tokenService: Angular2TokenService, private router: Router) {
    super();
    this.user = {
      email: "",
      password: ""
    }
  }

  private handleSuccess() {
    console.log("AUTH DATA");
    console.log(this._tokenService.userSignedIn());
    this.router.navigate(['/map']);
  }

  submit() {
    super.resetError();
    this._tokenService.signIn({
      email: this.user['email'],
      password: this.user['password'],
      userType: 'user'
    }).subscribe(
      res => this.handleSuccess(),
      error => {
        super.handleError(error);
      }
    )
  }
}
