/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    ActivityIndicator,
    Image,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

import RepoListItem from './RepoListItem';
import DetailView from './DetailView';
import { Navigation } from 'react-native-navigation';



type Props = {
    navigator: Navigation,
    searchQuery: string,  
};
type State = {
    respositories: any,
    loading: boolean,
    searchQuery: string,
};


export default class SearchResultsView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            respositories: [],
            loading: true,
            searchQuery: props.searchQuery,
        };
    };

    componentDidMount() {
        this.getSearchResults();
    }

    _onForward = (rowData) => {
        console.log(`rowData: ${rowData}`);
        // also could use: Navigation.push({
        this.props.navigator.push({
            title: 'Detail View',
            component: DetailView,
            passProps: {
                item: rowData,
            }
        });
    };

    renderItem = ({item, index}) => {
        return (
            <RepoListItem item={item} index={index} onForward={this._onForward}/>
        );
    };

    getSearchResults = () => {
        const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(this.props.searchQuery)}`;

        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                this.setState({
                    respositories: json.items,
                }, () => {
                    console.log(`events: ${this.state.respositories}`);
                });
            }).catch((error) => {
                console.log(`error: ${error}`);
            }).finally(_ => {
                this.setState({loading: false})
            });
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={'large'} animating={true} />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.respositories}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  loadingContainer: {
      flex: 1,
      justifyContent: 'center',
  },
});
