const RADIO_SERVICE_URL = 'http://192.168.2.222:3000';
const STATION_SERVICE_URL = 'https://radio-stations.herokuapp.com';

export const PLAYING = 'playing';
export const RECEIVE_STATIONS = 'receiveStations';
export const RECEIVE_REFRESH = 'receiveRefresh';
export const REQUEST_PLAY = 'requestPlay';
export const REQUEST_REFRESH = 'requestRefresh';
export const REQUEST_STATIONS = 'requestStations';
export const STOP = 'stop';

export const playing = () => ({ type: PLAYING });

export const receiveStations = stations => ({
  type: RECEIVE_STATIONS,
  stations: stations
});

export const requestPlay = station => ({
  type: REQUEST_PLAY,
  station: station
});

export const requestStations = () => ({ type: REQUEST_STATIONS });

export const fetchStations = () => (
  (dispatch) => {
    dispatch(requestStations());
    return fetch(`${STATION_SERVICE_URL}/streams`)
      .then(response => response.json())
      .then(stations => dispatch(receiveStations(stations)));
  }
);

export const play = station => (
  (dispatch) => {
    dispatch(requestPlay(station));
    return fetch(`${RADIO_SERVICE_URL}/start`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: station.url })
    }).then(() => dispatch(playing()));
  }
);

export const stop = () => {
  fetch(`${RADIO_SERVICE_URL}/stop`, { method: 'PUT' });
  return { type: STOP };
};

export const requestRefresh = () => ({ type: REQUEST_REFRESH });

export const receiveRefresh = (current, running) => ({
  type: RECEIVE_REFRESH,
  playing: running,
  currentUrl: current.url
});

export const refresh = () => (
  (dispatch) => {
    dispatch(requestRefresh());
    const fetchCurrent =
      fetch(`${RADIO_SERVICE_URL}/current`).then(res => res.json());
    const fetchRunning =
      fetch(`${RADIO_SERVICE_URL}/running`).then(res => res.json());
    return Promise.all([fetchCurrent, fetchRunning])
      .then(state => dispatch(receiveRefresh(state[0], state[1])));
  }
);
