import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { RegisterData } from 'angular2-token';
import {UserApiService} from "../../providers/user.api.service";

@Component({
  selector: 'sign-up',
  templateUrl: 'html/sign.up.component.html',
  styleUrls: ['css/auth.component.css'],
  providers: [UserApiService],
  encapsulation: ViewEncapsulation.None
})

export class SignUpComponent {
  public error : Boolean;
  public errorMessage : String;

  private user : RegisterData;

  constructor(private userApiService: UserApiService) {
    this.error = false;
    this.errorMessage = "";
    this.user = {
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  submit() {
    this.userApiService.signUp(this.user)
      .subscribe(userRes => console.log(userRes));
  }
}
