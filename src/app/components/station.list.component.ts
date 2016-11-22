import { Component } from '@angular/core';
import { StationApiService } from './../providers/station.api.service';
import { StationsApiComponent } from './stations.api.component';

@Component({
  selector: 'station-list',
  templateUrl: 'html/station.list.component.html',
  styleUrls: ['css/station.list.component.css'],
	providers: [StationApiService]
})

export class StationListComponent extends StationsApiComponent {
  title: 'Stations';

  constructor(stationApiService: StationApiService) {
    super(stationApiService);
  }
}

