import { Provider } from 'react-redux';
import {
  applyMiddleware,
  createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  Button,
  Container,
  Content,
  Header,
  Title
} from 'native-base';
import React from 'react';

import reducer from './reducer';
import HeaderIcon from './components/HeaderIcon';
import PauseIcon from './components/PauseIcon';
import Stations from './containers/Stations';
import Status from './containers/Status';
import {
  fetchStations,
  refresh,
  stop
} from './actions';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);
store.dispatch(fetchStations());
store.dispatch(refresh());

const App = () => (
  <Provider store={store}>
    <Container>
      <Header>
        <Button transparent onPress={() => store.dispatch(refresh())}>
          <HeaderIcon iconName="ios-refresh" />
        </Button>
        <Title>Krasemann Radio</Title>
        <Button transparent onPress={() => store.dispatch(stop())}>
          <PauseIcon />
        </Button>
      </Header>
      <Content>
        <Status />
        <Stations />
      </Content>
    </Container>
  </Provider>
);

export default App;
