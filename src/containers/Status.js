import {
  Text
} from 'native-base';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  stationName: state.currentStation.name
});

const Status = ({ stationName }) => (
  <Text>Es läuft: {stationName}</Text>
);

Status.propTypes = { stationName: PropTypes.string.isRequired };

export default connect(mapStateToProps)(Status);
