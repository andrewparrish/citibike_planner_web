import { Component, OnInit } from '@angular/core';
import { StationApiService } from '../../providers/station.api.service';
import { Station } from '../../models/station'

@Component({
  providers: [StationApiService]
})

export class StationsApiComponent implements OnInit {
  get stations(): Station[] {
    console.log("HERE");
    return this._stations;
  }
  private _stations: Station[];

  constructor(private stationApiService: StationApiService) { }

  ngOnInit() {
    this.getStations().subscribe(stations => this._stations = stations);
  }

  getStations()  {
    return this.stationApiService.getStations();
  }
}
