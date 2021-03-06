export class Station {
    constructor(
        public id: Number,
        public station_name: String,
        public st_address_one: String,
        public st_address_two: String,
        public longitude: number,
        public latitude: number,
        public maps_url: string,
        public available_bikes: Number,
        public available_docks: Number
    ){}

    static defaultStation(): Station {
      return new Station(-1, 'Stations not yet defined', '', '', 0, 0, '', 0, 0);
    }
}
