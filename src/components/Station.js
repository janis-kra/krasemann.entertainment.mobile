import {
  ListItem,
  Text
} from 'native-base';
import React, { PropTypes } from 'react';

const Station = ({ isCurrent, play, station }) => (
  <ListItem
    button
    onPress={() => { play(station); }}
  >
    <Text>{station.name}</Text>
    {isCurrent && <Text> (playing)</Text>}
  </ListItem>
);

Station.propTypes = {
  isCurrent: PropTypes.bool,
  play: PropTypes.func.isRequired,
  station: PropTypes.object.isRequired
};

export default Station;
