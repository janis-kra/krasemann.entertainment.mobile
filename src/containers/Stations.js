import { connect } from 'react-redux';
import { play, stop } from '../actions';
import StationList from '../components/StationList';

const mapStateToProps = state => ({
  currentStation: state.currentStation,
  stations: state.stations,
  isPlaying: state.playing
});

const mapDispatchToProps = dispatch => ({
  play: station => dispatch(play(station)),
  stop: () => dispatch(stop())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationList);
