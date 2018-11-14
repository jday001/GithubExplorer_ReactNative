/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import SearchResultsView from './SearchResultsView';


type Props = {
    
};

type State = {
    searchQuery: string,
    loading: boolean,
};


export default class SearchView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            searchQuery: '',
            loading: false,
        };
    }

    _searchTextDidChange(text: string) {
        this.setState({searchQuery: text});
    }

    _performSearch = (): void => {
        console.log(`searching for ${this.state.searchQuery}`);

        this.props.navigator.push({
            screen: 'githubExample.SearchResults',
            title: 'Search Results'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Search for Things</Text>
                <TextInput
                    onChangeText={(text) => this._searchTextDidChange(text)}
                    style={styles.textField} 
                    placeholder='search' 
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                <TouchableOpacity style={styles.searchButton} onPress={this._performSearch}>
                <Text style={styles.searchText}>Search</Text>
                </TouchableOpacity>
                <ActivityIndicator animating={this.state.loading} size='large' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 64,
    marginBottom: 20,
  },
  textField: {
    marginHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: 'rgba(92, 193, 240, 1)',
    marginBottom: 8,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 60,
  },
  searchButton: {
    marginTop: 6,
    marginHorizontal: 12,
    height: 44,
    backgroundColor: 'rgba(92, 193, 240, 1)',
    alignSelf: 'stretch',
  },
  searchText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    lineHeight: 44,
    flex: 1,
  },
  searchError: {
      color: 'red',
      textAlign: 'center',
      marginTop: 10,
  }
});
