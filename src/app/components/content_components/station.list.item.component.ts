import { Component, Input } from '@angular/core';
import { Station } from '../../models/station';
import { ViewEncapsulation } from '@angular/core';
import {StationsApiComponent} from "./stations.api.component";
import {StationApiService} from "../../providers/station.api.service";


@Component({
  selector: 'station-list-item',
  templateUrl: 'html/station.list.item.component.html',
  styleUrls: ['css/station.list.item.component.css'],
  providers: [StationApiService],
  encapsulation: ViewEncapsulation.None
})

export class StationListItemComponent extends StationsApiComponent {
  @Input() station: Station;

  public showListItem : Boolean;
  public favorited : boolean;

  constructor(stationApiService: StationApiService) {
    super(stationApiService);
    this.showListItem = true;
    this.favorited = false;
  }

  showDetail() {
    this.showListItem = false;
  }


  favoriteStation() {
    super.favoriteStation(this.station);
    this.favorited = !this.favorited;
  }

  closeCard() {
    this.showListItem = true;
  }
}
