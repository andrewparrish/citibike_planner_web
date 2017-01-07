import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthComponent } from "./auth.component";

@Component({
  selector: 'change-password',
  templateUrl: 'html/change.password.component.html',
  styleUrls: ['css/auth.component.css'],
  providers: []
})

export class ChangePasswordComponent extends AuthComponent {
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
