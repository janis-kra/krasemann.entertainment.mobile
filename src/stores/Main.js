/**
 * Main store of the radio mobile app
 * @flow
 */
import {
  action,
  observable
} from 'mobx';
import Radio from '../models/Radio';


class Main {
  @observable radio = new Radio();

  @action startRadio (station, name) {
    console.log(`starting stream ${station.name} via ${station.url}`);
  }
}

export default Main;
