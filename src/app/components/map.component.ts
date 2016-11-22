/**
 * Created by andrewparrish on 11/19/16.
 */

import { Component } from '@angular/core';
import { StationsApiComponent } from './stations.api.component';
import { StationApiService } from '../providers/station.api.service';

@Component({
  selector: 'map',
  templateUrl: 'html/map.component.html',
  styleUrls: ['css/map.component.css'],
  providers: [StationApiService]
})

export class MapComponent extends StationsApiComponent {
  private _mapHeight: String;

  constructor(stationApiService: StationApiService) {
    super(stationApiService);
    this._mapHeight = (window.innerHeight - 64).toString() + 'px';
  }

  mapHeight() {
    return this._mapHeight || '1000px';
  }
}

