import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import { Text } from 'react-native';

import MainStore from './stores/Main';

class App extends Component {
  mainStore = new MainStore();

  render () {
    const mainStore = this.mainStore;
    return (
      <Provider mainStore={mainStore}>
        <Text>Krasemann Radio</Text>
      </Provider>
    );
  }
}

export default App;
