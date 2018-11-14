/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/components/screens';

AppRegistry.registerComponent(appName, () => App);

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'githubExample.App',
        navigatorStyle: {
            navBarHidden: true
        },
    },
});
