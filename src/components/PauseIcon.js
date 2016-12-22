import { Icon, View } from 'native-base';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isPlaying: state.playing
});

const PauseIcon = ({ isPlaying }) => {
  let icon;
  if (isPlaying) {
    icon = <Icon name={'ios-pause'} style={{ color: '#0A69FE' }} />;
  } else {
    icon = <View />;
  }
  return icon;
};

PauseIcon.propTypes = { isPlaying: PropTypes.bool };

export default connect(
  mapStateToProps
)(PauseIcon);
