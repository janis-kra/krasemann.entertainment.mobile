/**
 * Main store of the radio mobile app
 * @flow
 */
import {
  action,
  computed,
  observable
} from 'mobx';

export default class Radio {
  radioServiceUrl = '';
  @observable station = {};
  @observable stations = [
    {
      name: '1live',
      url: 'http://1live.akacast.akamaistream.net/7/706/119434/v1/gnl.akacast.akamaistream.net/1live'
    },
    {
      name: 'wdr2',
      url: 'https://www.wdr.de/wdrlive/media/hls/wdr2-rhein-und-ruhr.m3u8'
    }
  ];

  findStation (url) {
    return this.stations.find((station) => station.url === url);
  }

  @action startRadio (station) {
    this.station = station;
    console.log(`starting stream ${station.name} via ${station.url}`);
  }
}
