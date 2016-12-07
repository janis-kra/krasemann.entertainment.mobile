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

  @action startRadio () {
    console.log(`starting stream`);
  }
}

export default Main;
