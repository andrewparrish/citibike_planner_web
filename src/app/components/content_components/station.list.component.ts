import { Component } from '@angular/core';
import { StationApiService } from '../../providers/station.api.service';
import { StationsApiComponent } from './stations.api.component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'station-list',
  templateUrl: 'html/station.list.component.html',
  styleUrls: ['css/station.list.component.css'],
	providers: [StationApiService],
  encapsulation: ViewEncapsulation.None
})

export class StationListComponent extends StationsApiComponent {
  title: 'Stations';

  constructor(stationApiService: StationApiService) {
    super(stationApiService);
  }
}

