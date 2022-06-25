/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
import Playground from './src/screens/Playground';


AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, () => Playground);