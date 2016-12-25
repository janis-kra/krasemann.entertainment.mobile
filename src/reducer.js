/**
 * Main store of the radio mobile app
 * @flow
 */
import {
  PLAYING,
  RECEIVE_REFRESH,
  RECEIVE_STATIONS,
  REQUEST_PLAY,
  REQUEST_REFRESH,
  REQUEST_STATIONS,
  STOP
} from './actions';

const NO_STATION = { name: 'Nichts' };
const INITIAL_STATE = {
  currentStation: NO_STATION,
  loading: false,
  stations: []
};

const findStation = (url, stations) => (
  stations.find(station => station.url === url)
);

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
    case REQUEST_REFRESH:
      return { ...state, loading: true };
    case RECEIVE_REFRESH:
      return {
        ...state,
        loading: false,
        playing: action.playing || false,
        currentStation: findStation(action.currentUrl, state.stations) || NO_STATION
      };
    default:
      return state;
  }
};

export default reducer;
