/**
 * Created by andrewparrish on 11/19/16.
 */

import {Component, OnInit, ElementRef} from '@angular/core';

import { GoogleMapsApiKeyService } from '../providers/google.maps.api.key.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [GoogleMapsApiKeyService]
})

export class MapComponent implements OnInit{
  private _mapHeight: String;

  constructor(private elementRef: ElementRef, private service: GoogleMapsApiKeyService)  {}

  ngOnInit() {
    this._mapHeight = window.innerHeight.toString() + 'px';
    const hostElem = this.elementRef.nativeElement;
    console.log("HEIGHT", DOM.getProperty(hostElem.parentNode, 'height'));
  }

  mapHeight() {
    return this._mapHeight || '1000px';
  }
}

