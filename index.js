/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';                                    // import the app code from  App.tsx
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
