/**
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';

export default class IOSApp extends Component {
  render () {
    return <App></App>;
  }
}

AppRegistry.registerComponent('krasemannentertainmentmobile', () => IOSApp);
