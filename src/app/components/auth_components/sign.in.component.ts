import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: 'html/sign.in.component.html',
  styleUrls: ['css/sign.in.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class SignInComponent {

  constructor(private _tokenService: Angular2TokenService) { }
}
