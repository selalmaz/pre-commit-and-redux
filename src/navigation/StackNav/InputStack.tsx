import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StackScreen1 from '../../screens/StackScreen1';
import StackScreen2 from '../../screens/StackScreen2';
import Input from '../../screens/Input';
import {InputStackParamList} from '../types/types';

const Stack = createNativeStackNavigator<InputStackParamList>();

const InputStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Input" component={Input}></Stack.Screen>
      <Stack.Screen name="StackScreen1" component={StackScreen1}></Stack.Screen>
      <Stack.Screen name="StackScreen2" component={StackScreen2}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default InputStack;
