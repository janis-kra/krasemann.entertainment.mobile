import { Provider } from 'react-redux';
import {
  applyMiddleware,
  createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  Container,
  Content
} from 'native-base';
import React from 'react';

import Header from './components/Header';
import reducer from './reducer';
import Stations from './containers/Stations';
import Status from './containers/Status';
import { fetchStations } from './actions';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);
store.dispatch(fetchStations());

const App = () => (
  <Provider store={store}>
    <Container>
      <Content>
        <Header />
        <Status />
        <Stations />
      </Content>
    </Container>
  </Provider>
);

export default App;
