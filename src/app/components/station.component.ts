import { Component, Input } from '@angular/core';
import { Station } from './../models/station';

@Component({
    selector: 'station',
    templateUrl: './station.component.html',
    styleUrls: ['./station.component.css'],
    providers: []
})

export class StationComponent {
	@Input() station: Station;
}
