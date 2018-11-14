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
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';



type Props = {
    item: any,
    index: number,
    onForward: (rowData: Object) => void
};
type State = {
};

let moment = require('moment');


export default class ListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    };

    render() {
        return (
            <TouchableHighlight onPress={() => this.props.onForward(this.props.item)} underlayColor='#ddd'>
                <View style={styles.container}>
                    <Image 
                        source={{uri: this.props.item.actor.avatar_url}} 
                        style={styles.image}
                    />
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>
                            {moment(this.props.item.created_at).fromNow()}
                        </Text>
                        <Text style={styles.boldLabel}>
                            {this.props.item.actor.login}
                        </Text>
                        <Text style={styles.label}>
                            {this.props.item.repo.name}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderColor: '#D7D7D7',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
  },
  item: {
      padding: 10,
      fontSize: 18,
      height: 44,
  },
  image: {
      height: 36,
      width: 36,
      borderRadius: 18,
  },
  labelContainer: {
      paddingLeft: 20,
  },
  label: {
      backgroundColor: '#fff',
  },
  boldLabel: {
      fontWeight: '600',
  },
});