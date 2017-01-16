import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Station } from './../models/station';
import { Angular2TokenService } from 'angular2-token';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StationApiService extends ApiService {
  private stationsUrl = super.baseUrl().dev + '/stations';

  constructor (private http: Http, private _tokenService: Angular2TokenService) {
    super();
  }

  getStations() : Observable<Station[]> {
    return this.http.get(this.stationsUrl)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error));
  }

  getStreetView() : Observable<String> {
    return this._tokenService.get();
  }

  favoriteStation(station : Station) {
    return this._tokenService.request(
      {
        method: RequestMethod.Put,
        url: this.favoriteUrl(station)
      })
      .map(res => res.json())
      .catch(err => Observable.throw(err.json().error));
  }

  private favoriteUrl(station) {
    return super.baseUrl().dev + '/station/' + station.id + '/favorite';
  }

  private extractData(res: Response) {
    console.log(res);
    return res.json();
  }
}
