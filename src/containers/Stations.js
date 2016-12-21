import { connect } from 'react-redux';
import { play } from '../actions';
import StationList from '../components/StationList';

const mapStateToProps = state => ({
  currentStation: state.currentStation,
  stations: state.stations
});

const mapDispatchToProps = dispatch => ({
  play: station => dispatch(play(station))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationList);
