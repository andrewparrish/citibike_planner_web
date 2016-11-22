import { Component, Input } from '@angular/core';
import { Station } from './../models/station';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'station',
    templateUrl: 'html/station.component.html',
    styleUrls: ['css/station.component.css'],
    providers: [],
    encapsulation: ViewEncapsulation.None
})

export class StationComponent {
	@Input() station: Station;

  constructor(private sanitizer: DomSanitizer) {}

  getImageUrl() {
    return "https://d21xlh2maitm24.cloudfront.net/nyc/Transparent-Bike.png?mtime=20160420134420";
    //return this.sanitizer.bypassSecurityTrustResourceUrl(this.station.maps_url);
  }
}
