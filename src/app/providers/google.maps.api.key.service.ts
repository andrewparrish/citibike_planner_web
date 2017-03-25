import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LazyMapsAPILoaderConfigLiteral} from "angular2-google-maps/core";
// import HttpRequest = Http.HttpRequest;

@Injectable()
export class GoogleMapsApiKeyService extends ApiService {
  private keyUrl = super.baseUrl().dev + '/apikey';

  constructor(private http: Http) {
    super();
  }

  useFactory() : Promise<String> {
    let service = this;
    return new Promise(function(resolve, reject) {
      service.http.get(service.keyUrl).map(function(res) {
        resolve(res.json()['key']);
      });
    });
  }
}
