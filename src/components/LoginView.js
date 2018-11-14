/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View
  } from 'react-native';

import LoginService from '../services/LoginService';


type Props = {
    onLogin: (user: any, authHeader: string) => void,
};

// TODO: create a User object
type State = {
    username: string,
    password: string,
    loading: boolean,
    invalidCredentials: boolean,
    loginFailed: boolean,
    user: ?any,
    authHeader: string,
};


export default class LoginView extends Component<Props, State> {
    loginService = new LoginService();

    constructor(props: Props) {
        super(props);
        this.state = {
            username: '', 
            password: '', 
            loading: false, 
            invalidCredentials: false, 
            loginFailed: false,
            user: null,
            authHeader: '',
        };
    }

    usernameDidChange = (username: string): void => {
        this.setState({username});
    };

    passwordDidChange = (password: string): void => {
        this.setState({password});
    };

    handleLoginAttempt = (): void => {
        this.setState({loading: true});

        this.loginService.login(
            this.state.username, 
            this.state.password
        ).then((response) => {            
            if (response.badCredentials || response.unknownError) {
                this.setState({
                    invalidCredentials: response.badCredentials,
                    loginFailed: response.unknownError,
                    loading: false,
                });
                return;
            }

            this.setState({
                user: response['user'],
                loading: false,
                invalidCredentials: false,
                loginFailed: false,
                authHeader: response['authHeader']
            }, () => {
                this.props.onLogin(this.state.user, this.state.authHeader);
            });
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../resources/images/octocat.png')} style={styles.image} />
                <Text style={styles.title}>Github Explorer</Text>
                <TextInput
                    onChangeText={(text) => this.usernameDidChange(text)}
                    style={styles.textField} 
                    placeholder='username' 
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                <TextInput
                    onChangeText={(text) => this.passwordDidChange(text)}
                    style={styles.textField} 
                    placeholder='password' 
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                 />
                <TouchableOpacity style={styles.loginButton} onPress={this.handleLoginAttempt}>
                <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
                {this.state.loginFailed && (
                    <Text style={styles.loginError}>Something went wrong. Please try again.</Text>
                )}

                { this.state.invalidCredentials && (
                    <Text style={styles.loginError}>Invalid username or password. Please try again.</Text>
                )}
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
  image: {
    width: 100,
    height: 100,
    marginTop: 64,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
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
  },
  loginButton: {
    marginTop: 6,
    marginHorizontal: 12,
    height: 44,
    backgroundColor: 'rgba(92, 193, 240, 1)',
    alignSelf: 'stretch',
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    lineHeight: 44,
    flex: 1,
  },
  loginError: {
      color: 'red',
      textAlign: 'center',
      marginTop: 10,
  }
});
