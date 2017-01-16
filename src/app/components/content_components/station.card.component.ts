import {Component, Input, EventEmitter, Output} from '@angular/core';
import { Station } from '../../models/station';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Angular2TokenService } from 'angular2-token';

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
  private cardImage : string;

  constructor(private sanitizer: DomSanitizer, private tokenService: Angular2TokenService) {
    this.onCloseEmitter = new EventEmitter<Boolean>();
    this.favorited = false;
    this.cardImage = "https://d21xlh2maitm24.cloudfront.net/nyc/Transparent-Bike.png?mtime=20160420134420";
  }

  closeCard() {
    this.onCloseEmitter.emit(true);
  }

  showStreetView() {
  }

  showMapImage() {
    this.cardImage = this.station.maps_url;
  }


  getImageUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.cardImage);
  }
}
