/**
 * Main store of the radio mobile app
 * @flow
 */
import {
  PLAYING,
  RECEIVE_STATIONS,
  REQUEST_PLAY,
  REQUEST_STATIONS,
  STOP
} from './actions';

const INITIAL_STATE = {
  currentStation: { name: 'Nichts' },
  loading: false,
  stations: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYING:
      return { ...state, playing: true };
    case REQUEST_PLAY:
      return { ...state, playing: false, currentStation: action.station };
    case RECEIVE_STATIONS:
      return {
        ...state,
        loading: false,
        stations: action.stations
      };
    case REQUEST_STATIONS:
      return { ...state, loading: true };
    case STOP:
      return { ...state, playing: false };
    default:
      return state;
  }
};

export default reducer;
