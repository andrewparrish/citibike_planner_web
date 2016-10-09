import { Injectable } from '@angular/core';
import { ApiService } from './api.service.ts';

@Injectable()
export class StationApiService extends ApiService {
  getUrl() {
    return this.base_url + '/stations'
  }
}
