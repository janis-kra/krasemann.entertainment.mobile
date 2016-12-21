import { List } from 'native-base';
import React, { PropTypes } from 'react';

import Station from './Station';

const Stations = ({ currentStation, stations, play }) => (
  <List
    dataArray={stations}
    renderRow={
      station => (
        <Station
          isCurrent={currentStation.name === station.name}
          play={play}
          station={station}
        />
      )
    }
  />
);

Stations.propTypes = {
  currentStation: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  stations: PropTypes.array.isRequired
};

export default Stations;
