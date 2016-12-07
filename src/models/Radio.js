import { observable } from 'mobx';

const DEFAULT_STATION = {
  name: 'Bitte Stream wählen',
  url: 'http://localhost'
};

export default class Radio {
  radioServiceUrl = '';
  @observable station = DEFAULT_STATION;
  @observable stations = [
    DEFAULT_STATION,
    {
      name: '1live',
      url: 'http://1live.akacast.akamaistream.net/7/706/119434/v1/gnl.akacast.akamaistream.net/1live'
    },
    {
      name: 'wdr2',
      url: 'https://www.wdr.de/wdrlive/media/hls/wdr2-rhein-und-ruhr.m3u8'
    }
  ];
}
