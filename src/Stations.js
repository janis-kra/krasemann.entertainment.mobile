import { observer } from 'mobx-react/native';
import {
  List,
  ListItem,
  Text
} from 'native-base';
import React from 'react';

const Stations = (props) => {
  const radio = props.radio;
  return (
    <List
      dataArray={radio.stations.slice()}
      renderRow={
        station => (
          <ListItem
            button
            onPress={() => { radio.startRadio(station); }}
          >
            <Text>{station.name}</Text>
            {station.name === radio.currentStation.name && <Text> (playing)</Text>}
          </ListItem>
        )
      }
    />
  )
};

export default observer(Stations);
