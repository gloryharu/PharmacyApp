import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux_toolkit/store';
import MainNavigator from './src/navigator/MainNavigator';

import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
