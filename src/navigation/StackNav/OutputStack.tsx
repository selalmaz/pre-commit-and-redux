import React from 'react';
import Output from '../../screens/Output';
import StackScrren3 from '../../screens/StackScrren3';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OutputStackParamList} from '../types/types';

const Stack = createNativeStackNavigator<OutputStackParamList>();

const OutputStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Output" component={Output}></Stack.Screen>
      <Stack.Screen name="StackScreen3" component={StackScrren3}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default OutputStack;
