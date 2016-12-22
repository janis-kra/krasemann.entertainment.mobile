import {
  Button,
  Header,
  Icon,
  Title
} from 'native-base';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { stop } from '../actions';

const mapStateToProps = state => ({
  isPlaying: state.playing
});

const mapDispatchToProps = dispatch => ({
  stopPlaying: () => dispatch(stop())
});

const Head = ({ isPlaying, stopPlaying }) => (
  <Header>
    <Button transparent> </Button>
    <Title>Krasemann Radio</Title>
    { isPlaying &&
      <Button bordered rounded onPress={stopPlaying}>
        <Icon name={'ios-pause'} style={{ color: '#0A69FE' }} />
      </Button>
    }
  </Header>
);

Head.propTypes = {
  isPlaying: PropTypes.bool,
  stopPlaying: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Head);
