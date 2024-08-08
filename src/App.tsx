import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './navigation/TabNavigator';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <TabNavigator></TabNavigator>
    </Provider>
  );
}

export default App;
