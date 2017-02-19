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

  private _currStation: Station;

  protected map: Map;

  constructor(stationApiService: StationApiService, private mapsService: MapsService) {
    super(stationApiService);
  }

  ngOnInit() {
    this.map = L.map("mapid", {
      zoomControl: false,
      zoom: 22,
      center: L.latLng(40.7128, -74.0059),
      layers: [this.mapsService.baseMaps.CartoDB]
    });

    L.control.layers(this.mapsService.baseMaps).addTo(this.map);
    L.control.zoom({ position: "topright" }).addTo(this.map);

    this.addStationIcons();
  }

  addStationIcons() {
    let testIcon = L.icon({
      iconUrl: './assets/bikezero.svg',

      iconSize: [40,90]
    });

    this.getStations().subscribe((stations) => {
      stations.forEach((station) => {
        L.marker(L.latLng(station.latitude, station.longitude), { icon: testIcon }).addTo(this.map);
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

