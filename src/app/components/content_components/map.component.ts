/**
 * Created by andrewparrish on 11/19/16.
 */

import { Component } from '@angular/core';
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
    return this.mapsService.showStation();
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
        this.mapsService.markerForStation(station, this.iconDisplay);
      });
    });
  }

  closeCard() {
    this.mapsService.closeStationCard();
  }

  currStation(): Station {
    let station = this.mapsService.currStation();
    if (station) {
      return station;
    } else {
      return Station.defaultStation();
    }
  }
}

