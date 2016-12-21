import { List } from 'native-base';
import React, { PropTypes } from 'react';

import Station from './Station';

const Stations = ({ currentStation, stations, play, stop, isPlaying }) => (
  <List
    dataArray={stations}
    renderRow={
      station => (
        <Station
          isCurrent={currentStation.name === station.name}
          play={play}
          station={station}
          stop={stop}
          isPlaying={isPlaying}
        />
      )
    }
  />
);

Stations.propTypes = {
  currentStation: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool,
  play: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  stations: PropTypes.array.isRequired
};

export default Stations;
