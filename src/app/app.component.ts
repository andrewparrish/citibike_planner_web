import { Component } from '@angular/core';
import { StationApiService } from './providers/station.api.service';
import { Station } from './models/station'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [StationApiService]
})

export class AppComponent {
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
