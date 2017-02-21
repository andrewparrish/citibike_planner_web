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
  public stationApiService;

  constructor(stationApiService: StationApiService) {
    this.stationApiService = stationApiService;
  }

  ngOnInit() {
    this.getStations().subscribe(stations => this._stations = stations);
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
