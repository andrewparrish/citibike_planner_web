import { Component, OnInit } from '@angular/core';
import { StationApiService } from './../providers/station.api.service';
import { Station } from './../models/station'
import { StationComponent } from './station.component';

@Component({
  selector: 'station-list',
  templateUrl: './station.list.component.html',
  styleUrls: ['./station.list.component.css'],
	providers: [StationApiService]
})

export class StationListComponent implements OnInit{
	title: 'Stations';
	stations: Station[];

	constructor(private stationApiService: StationApiService) {
		console.log(this.stationApiService.getStations());
	}

	ngOnInit() { this.getStations(); }

	getStations() {
		this.stationApiService.getStations()
													.subscribe(stations => this.stations = stations);
	}
}
