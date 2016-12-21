/**
 * Main store of the radio mobile app
 * @flow
 */
import {
  PLAY,
  RECEIVE_STATIONS,
  REQUEST_STATIONS
} from './actions';

const INITIAL_STATE = {
  currentStation: { name: 'Nichts' },
  loading: false,
  stations: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY:
      return Object.assign({}, state, {
        currentStation: action.station
      });
    case RECEIVE_STATIONS:
      return Object.assign({}, state, {
        loading: false,
        stations: action.stations
      });
    case REQUEST_STATIONS:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
};

export default reducer;
