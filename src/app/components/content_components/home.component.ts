import {Component, OnInit} from "@angular/core";
import {Angular2TokenService} from "angular2-token";
/**
 * Created by andrewparrish on 4/2/17.
 */

@Component({
  selector: 'home',
  templateUrl: 'html/home.component.html',
  styleUrls: ['css/home.component.css'],
  providers: []
})

export class HomeComponent implements  OnInit {
  constructor(private _tokenService: Angular2TokenService) { }

  ngOnInit() {

  }
}
