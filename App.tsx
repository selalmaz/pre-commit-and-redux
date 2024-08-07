import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import First from './src/First/First';
import Second from './src/Second/Second';

function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <First></First>
        <Second></Second>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
