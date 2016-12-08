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

  constructor(private _tokenService: Angular2TokenService) {
    this.error = false;
    this.errorMessage = "";
  }

  submit(myForm : any) {
    console.log("My Form", myForm);
    // this._tokenService.signIn({
    //   email: "",
    //   password: "test"
    // }).subscribe(
    //   res => console.log(res),
    //   error => console.log(error)
    // );
  }
}
