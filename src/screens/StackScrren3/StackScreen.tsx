import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Style from './StackScreen.style';

const StackScreen = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.header}>Stack Screen 3</Text>
    </SafeAreaView>
  );
};

export default StackScreen;
