/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

import LoginView from './src/components/LoginView';


type Props = {};
type State = {
  isLoggedIn: boolean,
  user: any,
  authHeader: string,
};

export default class App extends Component<Props, State> {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null,
      authHeader: '',
    };
  }

  onLogin = (user: any, authHeader: string) => {
    console.log('onLogin firing');
    this.setState({
      isLoggedIn: true,
      user: user,
      authHeader: authHeader,
    }, () => {
      Navigation.startTabBasedApp({
        tabs:[
            {
                label: 'Feed',
                screen: 'githubExample.ActivityFeed',
                icon: require('./resources/images/inbox.png'),
                selectedIcon: require('./resources/images/inbox-selected.png'),
                title: 'Feed',
                passProps: {
                    user: this.state.user,
                    authHeader: this.state.authHeader,
                },
            },
            {
                label: 'Search',
                screen: 'githubExample.SearchScreen',
                icon: require('./resources/images/search.png'),
                title: 'Search',
            },
          ],
        });
      });
    }

  render() {
    return <LoginView onLogin={this.onLogin} />;
  }
}
