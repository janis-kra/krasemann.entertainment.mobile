import { observer } from 'mobx-react/native';
import {
  Text
} from 'native-base';
import React from 'react';

export default observer(props => (
  <Text>Es läuft: {props.currentStation.name}</Text>
));
