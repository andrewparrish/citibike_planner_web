export class Station {
    constructor(
        public id: Number,
        public station_name: String,
        public st_address_one: String,
        public st_address_two: String,
        public longitude: Number,
        public latitude: Number,
        public maps_url: string
    ){}

    static defaultStation(): Station {
      return new Station(-1, 'Stations not yet defined', '', '', 0, 0, '');
    }
}
