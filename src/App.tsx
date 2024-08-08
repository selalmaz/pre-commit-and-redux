import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';
import First from './First/First';
import Second from './Second/Second';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="inputPage" component={First}></Tab.Screen>
          <Tab.Screen name="outputPage" component={Second}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
