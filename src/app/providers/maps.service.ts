import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import * as L from 'leaflet';

@Injectable()
export class MapsService {
  public baseMaps: any;
  public icons: any;

  // CREDIT: https://github.com/haoliangyu/angular2-leaflet-starter/blob/master/public_src/services/map.service.ts
  constructor(private http: Http) {
    this.baseMaps = {
      OpenStreetMap: L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
      }),
      Esri: L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
      }),
      CartoDB: L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
      })
    };

    this.generateIcons();
  }

  marketForStation(station, iconType = 'bike') {
    let key = iconType == 'bike' ? 'available_bikes' : 'available_docks';
  }

  iconRange(): number[] {
    let arr = [];
    for(let i = 0; i <= 15; i++) {
      arr.push(i);
    }

    return arr;
  }

  generateIcons() {
    ['bike', 'dock'].forEach((type) => {
      this.iconRange().forEach((num) => {
        this.icons[type][num] = "./assets/" + type + "s/" + type + "_" + num + ".svg";
      });
    });
  }
}
