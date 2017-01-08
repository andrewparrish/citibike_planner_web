import { Component, Input } from '@angular/core';
import { Station } from '../../models/station';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'station-list-item',
  templateUrl: 'html/station.list.item.component.html',
  styleUrls: ['css/station.list.item.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class StationListItemComponent {
  @Input() station: Station;

  public showListItem : Boolean;
  public favorited : boolean;

  constructor() {
    this.showListItem = true;
    this.favorited = false;
  }

  showDetail() {
    this.showListItem = false;
  }


  favoriteStation() {
    this.favorited = !this.favorited;
  }

  closeCard() {
    this.showListItem = true;
  }
}
