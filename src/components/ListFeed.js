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

import ListItem from './ListItem';
import DetailView from './DetailView';
import { Navigation } from 'react-native-navigation';



type Props = {
    user: any,
    authHeader: string,
    navigator: Navigation,
};
type State = {
    events: Array<Object>,
    loading: boolean,
};


export default class ListFeed extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            events: [],
            loading: true,
        };
    };

    componentDidMount() {
        this.getFeed();
    }

    _onForward = (rowData) => {
        console.log(`rowData: ${rowData}`);
        this.props.navigator.push({
            screen: 'githubExample.DetailView',
            title: 'Detail View',
            passProps: {
                item: rowData,
            }
        });
    };

    renderItem = ({item, index}: {item: Object, index: number}) => {
        return (
            <ListItem item={item} index={index} onForward={this._onForward}/>
        );
    };

    getFeed = () => {
        // const url = `https://api.github.com/users/${this.props.user['login']}/events`;
        const url = 'https://api.github.com/users/facebook/events'

        fetch(url, {
            headers: this.props.authHeader,
        }).then((response) => {
            return response.json();
        }).then((json) => {
            // let feedItems = json.filter((event) => event.type == 'PushEvent');
            this.setState({
                events: json, 
            }, () => {
                console.log(`events: ${this.state.events}`);
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
                    data={this.state.events}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
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
