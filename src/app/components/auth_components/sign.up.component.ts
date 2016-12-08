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

  constructor(private _tokenService: Angular2TokenService) { }
}
