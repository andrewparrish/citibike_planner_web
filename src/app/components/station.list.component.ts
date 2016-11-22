import { Component, OnInit } from '@angular/core';
import { StationApiService } from './../providers/station.api.service';
import { Station } from './../models/station'
import { StationsApiComponent } from './stations.api.component';

@Component({
  selector: 'station-list',
  templateUrl: './station.list.component.html',
  styleUrls: ['./station.list.component.css'],
	providers: [StationApiService]
})

export class StationListComponent extends StationsApiComponent implements OnInit{
	title: 'Stations';
	stations: Station[];

	constructor(stationApiService: StationApiService) {
	  super(stationApiService);
  }

	ngOnInit() { this.getStations(); }

}
