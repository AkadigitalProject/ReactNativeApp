
import React from 'react';
import { Alert, NativeEventEmitter, NativeModules } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Home from './screens/Home';


const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home,navigationOptions: {
                                         header: null,
                                     }, },

});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
   render() {
        return(<AppContainer screenProps={this.props} />);
   }
}
