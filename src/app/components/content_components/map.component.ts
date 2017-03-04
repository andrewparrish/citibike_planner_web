/**
 * Created by andrewparrish on 11/19/16.
 */

import {Component, ViewChild} from '@angular/core';
import { StationsApiComponent } from './stations.api.component';
import { StationApiService } from '../../providers/station.api.service';
import { Station } from "../../models/station";

import { Map } from 'leaflet';
import {MapsService} from "../../providers/maps.service";

@Component({
  selector: 'map',
  templateUrl: 'html/map.component.html',
  styleUrls: ['css/map.component.css'],
  providers: [StationApiService, MapsService]
})

export class MapComponent extends StationsApiComponent {
  @ViewChild('infopane') infoPane;

  private _currStation: Station;
  private iconDisplay: string;

  protected map: Map;

  constructor(stationApiService: StationApiService, private mapsService: MapsService) {
    super(stationApiService);
    this.iconDisplay = 'bike';
  }

  ngOnInit() {
    this.map = this.mapsService.generateMap("mapid");

    this.addStationIcons();
  }

  showStation() : boolean {
    return this.mapsService.showStation;
  }

  setDocksActive() {
    if (this.iconDisplay !== 'dock') {
      this.iconDisplay = 'dock';
      this.addStationIcons();
    }
  }

  setBikesActive() {
    if (this.iconDisplay !== 'bike') {
      this.iconDisplay = 'bike';
      this.addStationIcons();
    }
  }

  addStationIcons() {
    this.getStations().subscribe((stations) => {
      stations.forEach((station) => {
        if (this._currStation == undefined) {
          this._currStation = station;
        }
        this.mapsService.markerForStation(station, this.iconDisplay);
      });
    });
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

