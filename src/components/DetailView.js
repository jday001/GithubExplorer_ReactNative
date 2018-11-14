/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

let moment = require('moment');


type Props = {
    item: any,
};
type State = {
};


export default class DetailView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    };

    renderItem = ({item, index}) => {
        return (
            <View style ={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 12,
                borderColor: '#D7D7D7',
                borderBottomWidth: 1,
                paddingVertical: 10,
            }}>
                <Text><Text style={{fontWeight: '800'}}>{item.sha.substring(0, 6)}</Text> - {item.message}</Text>
            </View>
        );
    };

    render() {
        let branch = '';
        const refs = this.props.item.payload.ref;
        if (refs) {
            branch = refs.replace('refs/heads/', '');
        }

        let commitCount = 0;
        const commits = this.props.item.payload.commits;
        if (commits) {
            commitCount = commits.length;
        }

        return (
            <View style={styles.container}>
                <Image 
                        source={{uri: this.props.item.actor.avatar_url}} 
                        style={styles.image}
                />
                <Text style={styles.label}>{moment(this.props.item.created_at).fromNow()}</Text>
                <Text style={styles.label}>{this.props.item.actor.login}</Text>
                {branch != '' && <Text style={styles.label}>{branch}</Text>}
                <Text style={styles.label}>at {this.props.item.repo.name}</Text>
                {commitCount > 0 && <Text style={styles.headerLabel}>{commitCount} commits</Text>}
                <FlatList
                    data={this.props.item.payload.commits}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.sha}
                    automaticallyAdjustContentInsets={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
      height: 120,
      width: 120,
      borderRadius: 60,
  },
  headerLabel: {
      fontWeight: '600',
      paddingTop: 60,
      fontSize: 20,
  },
  label: {
      paddingVertical: 6,
      fontSize: 16,
  },
});
