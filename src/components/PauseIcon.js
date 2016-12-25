import { View } from 'native-base';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import HeaderIcon from './HeaderIcon';

const mapStateToProps = state => ({
  isPlaying: state.playing
});

const PauseIcon = ({ isPlaying }) => {
  let icon;
  if (isPlaying) {
    icon = <HeaderIcon iconName={'ios-pause'} />;
  } else {
    icon = <View />;
  }
  return icon;
};

PauseIcon.propTypes = { isPlaying: PropTypes.bool };

export default connect(
  mapStateToProps
)(PauseIcon);
