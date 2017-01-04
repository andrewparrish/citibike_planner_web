import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthComponent } from "./auth.component";

@Component({
  selector: 'sign-up',
  templateUrl: 'html/forgot.password.component.html',
  styleUrls: ['css/forgot.password.component.css'],
  providers: []
})

export class ForgotPasswordComponent extends AuthComponent {
  private password : string;

  constructor(tokenService: Angular2TokenService) {
    super(tokenService);
    this.password = "";
  }

  submit() {
    super.resetError();
    this.tokenService.resetPassword({
      email: this.password
    }).subscribe(
      res => console.log(res),
      error => super.handleError(error)
    )
  }
}
