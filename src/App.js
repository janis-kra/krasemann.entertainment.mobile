import { Provider } from 'mobx-react';
import { observer } from 'mobx-react/native'
import React, { Component } from 'react';
import {
  Item,
  Picker,
  Text,
  View
} from 'react-native';

import MainStore from './stores/Main';

@observer
class App extends Component {
  mainStore = new MainStore();

  renderStations (stations) {
    return stations.map(station => (
      <Picker.Item label={station.name} value={station.url} />
    ));
  }

  render () {
    const mainStore = this.mainStore;
    const stations = this.renderStations(mainStore.radio.stations);
    return (
      <Provider mainStore={mainStore}>
        <View>
          <Text>Krasemann Radio</Text>
          <Picker
            >
            {stations}
          </Picker>
        </View>
      </Provider>
    );
  }
}

export default App;
