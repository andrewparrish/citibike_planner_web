import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserApiService extends ApiService {
  private userUrl = super.baseUrl().dev + '/auth';

  constructor(private http: Http) {
    super();
  }

  signUp(userData) : Observable<any> {
    return this.http.post(this.userUrl, userData)
                    .map((res: Response) => console.log(res.json()))
                    .catch((error: any) => Observable.throw(error.json().error));
  }
}
