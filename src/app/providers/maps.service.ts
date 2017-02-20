import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import * as L from 'leaflet';

const ZOOM = 22;

@Injectable()
export class MapsService {
  public baseMaps: any;
  public icons: any;
  public map: L.Map;

  private markers;

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

    this.icons = {};
    this.markers = {};
    this.generateIcons();
  }

  generateMap(map_id) {
    this.map = L.map(map_id, {
      zoomControl: false,
      zoom: ZOOM,
      center: L.latLng(40.7128, -74.0059),
      layers: [this.baseMaps.CartoDB]
    });

    L.control.layers(this.baseMaps).addTo(this.map);
    L.control.zoom({ position: "topright" }).addTo(this.map);

    return this.map;
  }

  iconForStation(station, iconType) : L.Icon {
    let url = this.iconUrlForStation(station, iconType);
    return L.icon({
      iconUrl: url,
      iconSize: [40, 90]
    });
  }

  markerForStation(station, iconType) {
    let marker = null;
    if (this.markers[station.id] === undefined) {
      marker = L.marker(L.latLng(station.latitude, station.longitude), {
        icon: this.iconForStation(station, iconType)
      });
      marker.addTo(this.map);
    } else {
      this.markers[station.id].setIcon(this.iconForStation(station, iconType));
    }
    this.markers[station.id] = marker;
  }

  iconUrlForStation(station, iconType) {
    iconType = iconType || 'bike';
    let key = iconType === 'bike' ? 'available_bikes' : 'available_docks';
    let num = station[key];
    num = num > 15 ? 15 : num;

    return this.icons[iconType][num];
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
      this.icons[type] = {};
      this.iconRange().forEach((num) => {
        this.icons[type][num] = "./assets/" + type + "s/" + type + "_" + num + ".svg";
      });
    });
  }
}
