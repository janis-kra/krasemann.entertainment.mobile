import {
  Icon,
  ListItem,
  Text
} from 'native-base';
import React, { PropTypes } from 'react';

const Station = ({ isCurrent, isPlaying, play, station, stop }) => (
  <ListItem
    iconLeft
    button
    onPress={() => {
      if (isCurrent && isPlaying) {
        stop();
      } else {
        play(station);
      }
    }}
  >
    <Icon
      name={isCurrent && isPlaying ? 'ios-pause' : 'ios-play'}
      style={{ color: '#2196f3' }}
    />
    <Text>{station.name}</Text>
  </ListItem>
);

Station.propTypes = {
  isCurrent: PropTypes.bool,
  isPlaying: PropTypes.bool,
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  station: PropTypes.object.isRequired
};

export default Station;
