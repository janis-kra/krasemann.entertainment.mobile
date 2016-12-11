/**
 * Main store of the radio mobile app
 * @flow
 */
import {
  action,
  observable
} from 'mobx';

const radioServiceUrl = '';
const stationServiceUrl = 'https://radio-stations.herokuapp.com';

export default class Radio {
  @observable loading = false;
  @observable station = {};
  @observable stations = [];

  @action loadStations = () => {
    this.loading = true;
    fetch(`${stationServiceUrl}/streams`)
      .then(response => response.json())
      .then((stations) => {
        this.stations = stations;
        this.loading = false;
      })
      .catch((error) => { console.error(error); });
  }

  @action startRadio (station) {
    this.station = station;
    console.log(`starting stream ${station.name} via ${station.url}`);
  }
}
