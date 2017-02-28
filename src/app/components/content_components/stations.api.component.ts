import { Component } from '@angular/core';
import { StationApiService } from '../../providers/station.api.service';
import { Station } from '../../models/station'
import {Observable} from "rxjs";

@Component({
  providers: [StationApiService]
})

export class StationsApiComponent {
  get stations(): Station[] {
    return this._stations;
  }
  protected _stations: Station[];
  public stationApiService;

  constructor(stationApiService: StationApiService) {
    this.stationApiService = stationApiService;
  }

  getStations()  {
    return this.stationApiService.getStations();
  }

  favoriteStation(station : Station) {
    this.stationApiService.favoriteStation(station)
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );
  }
}
