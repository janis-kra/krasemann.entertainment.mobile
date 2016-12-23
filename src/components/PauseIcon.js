import { Icon, View } from 'native-base';
import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isPlaying: state.playing
});

const PauseIcon = ({ isPlaying }) => {
  const c = (Platform.OS === 'ios') ? '#2196f3' : '#fafafa';
  let icon;
  if (isPlaying) {
    icon = <Icon name={'ios-pause'} style={{ color: c }} />;
  } else {
    icon = <View />;
  }
  return icon;
};

PauseIcon.propTypes = { isPlaying: PropTypes.bool };

export default connect(
  mapStateToProps
)(PauseIcon);
