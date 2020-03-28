import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AppContainer from './src/screens/App';

export class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <AppContainer />
      </Provider>
    )
  }
}

export default App;
