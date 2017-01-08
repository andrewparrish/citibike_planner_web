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
  private sent : boolean;

  constructor(tokenService: Angular2TokenService) {
    super(tokenService);
    this.email = "";
    this.sent = false;
  }

  handleSuccess() {
    this.sent = true;
  }

  submit() {
    super.resetError();
    this.tokenService.resetPassword({
      email: this.email
    }).subscribe(
      res => this.handleSuccess(),
      error => super.handleError(error)
    )
  }
}
