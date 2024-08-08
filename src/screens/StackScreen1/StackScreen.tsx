import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Stlye from './StackScreen.style';

const StackScreen = () => {
  return (
    <SafeAreaView style={Stlye.container}>
      <Text style={Stlye.header}>Stack Screen 1</Text>
    </SafeAreaView>
  );
};

export default StackScreen;
