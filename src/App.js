import { Provider } from 'mobx-react';
import { observer } from 'mobx-react/native';
import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Text,
  Title
} from 'native-base';
import React, { Component } from 'react';
import Radio from './stores/Radio';

@observer
class App extends Component {

  static renderStations (station) {
    return (
      <ListItem
        button
        onPress={() => { this.radio.startRadio(station); }}
      >
        <Text>{station.name}</Text>
      </ListItem>
    );
  }

  constructor () {
    super();
    this.radio = new Radio();
  }

  componentWillMount () {
    this.radio.loadStations();
  }

  render () {
    const stations = this.radio.stations.map(station => station);
    return (
      <Provider mainStore={this.radio}>
        <Container>
          <Header>
            <Title>Krasemann Radio</Title>
          </Header>
          <Content>
            <Text>Aktuell: {this.radio.station.name}</Text>
            <List
              dataArray={stations}
              renderRow={station => (
                <ListItem
                  button
                  onPress={() => { this.radio.startRadio(station); }}
                >
                  <Text>{station.name}</Text>
                </ListItem>
              )
              }
            />
          </Content>
        </Container>
      </Provider>
    );
  }
}

export default App;
