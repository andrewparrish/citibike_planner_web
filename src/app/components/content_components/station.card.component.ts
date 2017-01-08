import {Component, Input, EventEmitter, Output} from '@angular/core';
import { Station } from '../../models/station';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'station-card',
    templateUrl: 'html/station.card.component.html',
    styleUrls: ['css/station.card.component.css'],
    providers: [],
    encapsulation: ViewEncapsulation.None
})

export class StationCardComponent{
	@Input() station: Station;
  @Output() onCloseEmitter: EventEmitter<Boolean>;
  private favorited : boolean;

  constructor(private sanitizer: DomSanitizer) {
    this.onCloseEmitter = new EventEmitter<Boolean>();
    this.favorited = false;
  }

  closeCard() {
    this.onCloseEmitter.emit(true);
  }


  getImageUrl() {
    return "https://d21xlh2maitm24.cloudfront.net/nyc/Transparent-Bike.png?mtime=20160420134420";
    //return this.sanitizer.bypassSecurityTrustResourceUrl(this.station.maps_url);
  }
}
