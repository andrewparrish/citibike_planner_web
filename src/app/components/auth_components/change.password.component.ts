import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthComponent } from "./auth.component";
import {URLSearchParams, Http, Headers, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'change-password',
  templateUrl: 'html/change.password.component.html',
  styleUrls: ['css/auth.component.css'],
  providers: []
})

export class ChangePasswordComponent extends AuthComponent {
  private data : Object;
  private changeUrl : string;

  constructor(private router: Router, private http: Http, tokenService: Angular2TokenService) {
    super(tokenService);
    this.data = {
      password: "",
      passwordConfirmation: ""
    };
    this.changeUrl = "http://localhost:3000/auth/password"
  }

  private buildHeaders(params : URLSearchParams) {
    return new Headers({
      'Content-Type': 'application/json',
      'uid': decodeURIComponent(params.get("uid")),
      'client': params.get("client_id") || params.get("?client_id"),
      'access-token': params.get("token")
    });
  }

  private requestData() {
    return JSON.stringify({
      'password': this.data['password'],
      'password_confirmation': this.data['passwordConfirmation']
    });
  }

  private handleSuccess() {
    this.router.navigateByUrl('/user/password-updated')
  }

  submit() {
    super.resetError();
    let params = new URLSearchParams(window.location.search);
    let request = new RequestOptions({ headers: this.buildHeaders(params) });
    this.http.put(this.changeUrl, this.requestData(), request)
      .subscribe(
      res => this.handleSuccess(),
      error => super.handleError(error)
    )
  }
}
