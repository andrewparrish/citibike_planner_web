import { Component } from '@angular/core';
import { StationApiService } from '../../providers/station.api.service';
import { Station } from '../../models/station'

@Component({
  providers: [StationApiService]
})

export class StationsApiComponent {
  get stations(): Station[] {
    return this._stations;
  }
  private _stations: Station[];

  constructor(private stationApiService: StationApiService) { }

  getStations() {
    this.stationApiService.getStations()
      .subscribe(stations => this._stations = stations);
  }

  favoriteStation(station : Station) {
    this.stationApiService.favoriteStation(station)
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );
  }
}
