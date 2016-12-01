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
  public itemHeight : String;

  constructor() {
    this.showListItem = true;
  }

  showDetail() {
    this.showListItem = false;
  }

  closeCard() {
    this.showListItem = true;
  }
}
