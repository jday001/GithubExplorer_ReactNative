import { Navigation } from 'react-native-navigation';

import App from '../../App';
import LoginScreen from './LoginView';
import ActivityFeed from './ListFeed';
import DetailView from './DetailView';
import SearchScreen from './SearchView';
import SearchResults from './SearchResultsView';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('githubExample.App', () => App);
  Navigation.registerComponent('githubExample.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('githubExample.ActivityFeed', () => ActivityFeed);
  Navigation.registerComponent('githubExample.DetailView', () => DetailView);
  Navigation.registerComponent('githubExample.SearchScreen', () => SearchScreen);
  Navigation.registerComponent('githubExample.SearchResults', () => SearchResults);
}
