import { Provider } from 'mobx-react';
import { observer } from 'mobx-react/native';
import {
  Container,
  Content
} from 'native-base';
import React, { Component } from 'react';

import Header from './Header';
import Radio from './stores/Radio';
import Stations from './Stations';
import Status from './Status';

class App extends Component {

  constructor () {
    super();
    this.radio = new Radio();
  }

  componentWillMount () {
    this.radio.loadStations();
  }

  render () {
    const radio = this.radio;
    return (
      <Provider mainStore={radio}>
        <Container>
          <Content>
            <Header />
            <Status currentStation={radio.currentStation} />
            <Stations radio={radio} />
          </Content>
        </Container>
      </Provider>
    );
  }
}

export default observer(App);
