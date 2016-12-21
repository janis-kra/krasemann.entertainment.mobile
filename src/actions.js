const STATION_SERVICE_URL = 'https://radio-stations.herokuapp.com';

export const PLAY = 'play';
export const RECEIVE_STATIONS = 'receiveStations';
export const REQUEST_STATIONS = 'requestStations';

export const play = station => ({
  type: PLAY,
  station: station
});

export const receiveStations = stations => ({
  type: RECEIVE_STATIONS,
  stations: stations
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
