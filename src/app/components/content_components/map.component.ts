/**
 * Created by andrewparrish on 11/19/16.
 */

import {Component, ViewChild} from '@angular/core';
import { StationsApiComponent } from './stations.api.component';
import { StationApiService } from '../../providers/station.api.service';
import { Station } from "../../models/station";

@Component({
  selector: 'map',
  templateUrl: 'html/map.component.html',
  styleUrls: ['css/map.component.css'],
  providers: [StationApiService]
})

export class MapComponent extends StationsApiComponent {
  @ViewChild('infopane') infoPane;

  private _mapHeight: String;
  private _currStation: Station;

  constructor(stationApiService: StationApiService) {
    super(stationApiService);
    this._mapHeight = (window.innerHeight - 64).toString() + 'px';
  }

  mapHeight() {
    return this._mapHeight || '1000px';
  }
  clickedStation(stationId, index): void {
    this._currStation = this.stations[index];
    console.log("INFO PANE", this.infoPane);
  }

  currStation(): Station {
    if (this._currStation) {
      return this._currStation;
    } else {
      return Station.defaultStation();
    }
  }
}

