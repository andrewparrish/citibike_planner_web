import { Component, Input } from '@angular/core';
import { Station } from './../models/station';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'station-list-item',
  templateUrl: 'html/station.list.item.component.html',
  styleUrls: ['css/station.list.item.component.css'],
  providers: []
})

export class StationListItemComponent {
  @Input() station: Station;
}
