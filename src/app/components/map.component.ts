/**
 * Created by andrewparrish on 11/19/16.
 */

import {Component, OnInit, ElementRef} from '@angular/core';
import { StationsApiComponent } from './stations.api.component';
import { GoogleMapsApiKeyService } from '../providers/google.maps.api.key.service';
import { StationApiService } from '../providers/station.api.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [GoogleMapsApiKeyService, StationApiService]
})

export class MapComponent extends StationsApiComponent implements OnInit {
  private _mapHeight: String;

  constructor(private elementRef: ElementRef, private service: GoogleMapsApiKeyService, stationApiSevice: StationApiService)  {
    super(stationApiSevice);
  }

  ngOnInit() {
    this._mapHeight = (window.innerHeight - 64).toString() + 'px';
    const hostElem = this.elementRef.nativeElement;
  }

  mapHeight() {
    return this._mapHeight || '1000px';
  }
}

