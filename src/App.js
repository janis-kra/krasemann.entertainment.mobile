import { Provider } from 'mobx-react';
import { observer } from 'mobx-react/native'
import React, { Component } from 'react';
import {
  Item,
  Picker,
  Text,
  View
} from 'react-native';

import Radio from './stores/Radio';

@observer
class App extends Component {
  radio = new Radio();

  renderStations (stations) {
    return stations.map(station => (
      <Picker.Item
        key={station.name}
        label={station.name}
        value={station.url}
      />
    ));
  }

  render () {
    const stations = this.renderStations(this.radio.stations);
    return (
      <Provider mainStore={this.radio}>
        <View>
          <Text>Krasemann Radio</Text>
          <Text>Aktuell: {this.radio.station.name}</Text>
          <Picker
            selectedValue={this.radio.station.url}
            onValueChange={(station) => { this.radio.startRadio(station); }}
            >
            {stations}
          </Picker>
        </View>
      </Provider>
    );
  }
}

export default App;
