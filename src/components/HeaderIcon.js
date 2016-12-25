import { Icon, View } from 'native-base';
import React, { PropTypes } from 'react';
import { Platform } from 'react-native';

const HeaderIcon = ({ iconName }) => {
  const c = (Platform.OS === 'ios') ? '#2196f3' : '#fafafa';
  return <Icon name={iconName} style={{ color: c }} />;
};

HeaderIcon.propTypes = { iconName: PropTypes.string.isRequired };

export default HeaderIcon;
