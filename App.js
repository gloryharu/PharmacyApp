import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux_toolkit/store';
import RootNavigator from './src/navigator/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
// import {LogBox} from 'react-native';

const App = () => {
  // LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  // LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <Provider store={store}>
      <NavigationContainer>
          <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

