import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthComponent } from "./auth.component";

@Component({
  selector: 'forgot-password',
  templateUrl: 'html/forgot.password.component.html',
  styleUrls: ['css/auth.component.css'],
  providers: []
})

export class ForgotPasswordComponent extends AuthComponent {
  private email : string;

  constructor(tokenService: Angular2TokenService) {
    super(tokenService);
    this.email = "";
  }

  submit() {
    super.resetError();
    this.tokenService.resetPassword({
      email: this.email
    }).subscribe(
      res => console.log(res),
      error => super.handleError(error)
    )
  }
}
