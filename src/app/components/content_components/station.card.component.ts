import {Component, Input, EventEmitter, Output, ViewChild} from '@angular/core';
import { Station } from '../../models/station';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {StationsApiComponent} from "./stations.api.component";
import {StationApiService} from "../../providers/station.api.service";

@Component({
    selector: 'station-card',
    templateUrl: 'html/station.card.component.html',
    styleUrls: ['css/station.card.component.css'],
    providers: [StationApiService],
    encapsulation: ViewEncapsulation.None
})

export class StationCardComponent extends StationsApiComponent {
	@Input() station: Station;
  @Output() onCloseEmitter: EventEmitter<Boolean>;
  @ViewChild('myChart') myChart;

  private favorited : boolean;
  private cardImage : string;
  private showingStreetView: boolean;
  private chartData: Array<any> = [];
  private chartLabels: Array<any> = [];
  private chartType: string;

  constructor(private sanitizer: DomSanitizer, stationApiService: StationApiService) {
    super(stationApiService);
    this.onCloseEmitter = new EventEmitter<Boolean>();
    this.favorited = false;
    this.cardImage = "https://d21xlh2maitm24.cloudfront.net/nyc/Transparent-Bike.png?mtime=20160420134420";
    this.showingStreetView = false;
    this.chartData = [{ data: [1, 2, 4, 6, 9] }];
    this.chartLabels = [];
    this.chartType = "line";
  }

  getChartLabels() {
    return this.chartLabels;
  }

  ngOnChanges() {
    this.stationApiService.getChartData(this.station.id).subscribe(
      (res) => {
        this.chartData = res.data.bikes;
        this.chartLabels = res.legend.map((element) => {
          return new Date(element).getMinutes();
        });
        console.log(this.myChart);
        this.myChart.chart.config.data.labels = this.chartLabels;
      },
      (err) => { console.log(err); }
    )

  }

  closeCard() {
    this.onCloseEmitter.emit(true);
  }

  showStreetView() {
    let width = document.getElementById("stationCard").clientWidth;
    this.stationApiService.getStreetView(this.station.id, width).subscribe(
      (res) => {
        console.log(res);
        this.setCardImage(res['street_view_url']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  setCardImage(url) {
    if (url !== this.cardImage) {
      this.cardImage = url;
    }
  }

  showMapImage() {
    this.setCardImage(this.station.maps_url);
  }


  getImageUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.cardImage);
  }
}
