import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Station } from './../models/station';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StationApiService extends ApiService {
  private stationUrl = super.baseUrl().dev + '/stations';

	constructor (private http: Http) {
		super();
	}

  getStations() : Observable<Station[]> {
		return this.http.get(this.stationUrl)
										.map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error));
  }

	private extractData(res: Response) {
		console.log(res);
		return res.json();
	}
}
