/**
 * Created by andrewparrish on 11/19/16.
 */

import {Component, ViewChild} from '@angular/core';
import { StationsApiComponent } from './stations.api.component';
import { StationApiService } from '../../providers/station.api.service';
import { Station } from "../../models/station";

import * as L from 'leaflet';
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

  private _mapHeight: String;
  private _mapWidth: String;
  private _currStation: Station;

  protected map: Map;

  constructor(stationApiService: StationApiService, private mapsService: MapsService) {
    super(stationApiService);
    this._mapHeight = (window.innerHeight - 64).toString() + 'px';
    this._mapWidth = (window.innerWidth) + 'px';
  }

  ngOnInit() {
    this.map = L.map("mapid", {
      zoomControl: false,
      zoom: 12,
      center: L.latLng(40.7128, -74.0059),
      layers: [this.mapsService.baseMaps.OpenStreetMap]
    });

    L.control.layers(this.mapsService.baseMaps).addTo(this.map);
    L.control.zoom({ position: "topright" }).addTo(this.map);
  }

  mapHeight() {
    return this._mapHeight || '1000px';
  }

  mapWidth() {
    return this._mapWidth;
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

