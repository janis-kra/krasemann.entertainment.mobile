import {
  Icon,
  ListItem,
  Text
} from 'native-base';
import React, { PropTypes } from 'react';

const Station = ({ isCurrent, play, station }) => (
  <ListItem
    iconLeft
    button
    onPress={() => { play(station); }}
  >
    {
      <Icon
        name={isCurrent ? 'ios-pause' : 'ios-play'}
        style={{ color: '#0A69FE' }}
      />
    }
    <Text>{station.name}</Text>
  </ListItem>
);

Station.propTypes = {
  isCurrent: PropTypes.bool,
  play: PropTypes.func.isRequired,
  station: PropTypes.object.isRequired
};

export default Station;
