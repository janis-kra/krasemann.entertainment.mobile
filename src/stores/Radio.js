/**
 * Main store of the radio mobile app
 * @flow
 */
import {
  action,
  computed,
  observable
} from 'mobx';

const radioServiceUrl = '';
const stationServiceUrl = 'https://radio-stations.herokuapp.com';

export default class Radio {
  @observable loading = false;
  @observable currentStation = { name: 'Nichts' };
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

  setPlaying = (station) => {
    this.currentStation.name = station.name;
    this.currentStation.url = station.url;
  }

  @action isCurrent (station) {
    return this.currentStation.name === station.name;
  }

  @action startRadio (station) {
    this.setPlaying(station);
    console.log(`starting stream ${station.name} via ${station.url}`);
  }
}
