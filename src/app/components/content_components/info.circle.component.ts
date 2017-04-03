import {Component, Input} from "@angular/core";
/**
 * Created by andrewparrish on 4/2/17.
 */

@Component({
  selector: 'info-circle',
  templateUrl: 'html/info.circle.html',
  styleUrls: ['css/info.circle.css'],
  providers: []
})

export class InfoCircleComponent {
  @Input() imagePath: string;
  @Input() infoText: string;

  constructor() { }

  getImageUrl() {
    return this.imagePath;
  }
}
