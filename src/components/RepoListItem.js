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
    onForward: (rowData) => void
};
type State = {
};

let moment = require('moment');


export default class RepoListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fullName}>{this.props.item.full_name}</Text>
                <View style={styles.labelContainer}>
                    <View style={styles.repoCell}>
                        <Text>Stars</Text>
                        <Text style={styles.repoCellLabel}>{this.props.item.stargazers_count}</Text>
                    </View>
                    <View style={styles.repoCell}>
                        <Text>Forks</Text>
                        <Text style={styles.repoCellLabel}>{this.props.item.forks}</Text>
                    </View>
                    <View style={styles.repoCell}>
                        <Text>Issues</Text>
                        <Text style={styles.repoCellLabel}>{this.props.item.open_issues}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderColor: '#D7D7D7',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
  },
  fullName: {
      fontSize: 20,
      fontWeight: '600',
  },
  labelContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
  },
  repoCell: {
      width: 50,
      alignItems: 'center'
  },
  repoCellIcon: {
      width: 20,
      height: 20,
  },
  repoCellLabel: {
      textAlign: 'center',
  },
});