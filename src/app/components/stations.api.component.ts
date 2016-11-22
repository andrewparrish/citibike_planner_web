import { Component, OnInit } from '@angular/core';
import { StationApiService } from './../providers/station.api.service';
import { Station } from './../models/station'

@Component({
  providers: [StationApiService]
})

export class StationsApiComponent implements OnInit{
  title: 'Stations';
  stations: Station[];

  constructor(private stationApiService: StationApiService) { }

  ngOnInit() { this.getStations(); }

  getStations() {
    this.stationApiService.getStations()
      .subscribe(stations => this.stations = stations);
  }
}
