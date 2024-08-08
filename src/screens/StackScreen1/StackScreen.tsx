import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import Stlye from './StackScreen.style';
import {TouchableOpacity} from 'react-native';
import {InputStackParamList} from '../../navigation/types/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type props = NativeStackScreenProps<InputStackParamList>;

const StackScreen = ({navigation}: props) => {
  function goToStack2() {
    navigation.navigate('StackScreen2');
  }

  return (
    <SafeAreaView style={Stlye.container}>
      <Text style={Stlye.header}>Stack Screen 1</Text>
      <TouchableOpacity style={Stlye.button} onPress={goToStack2}>
        <Text style={Stlye.buttonText}>Sayfa ikiye gecis yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StackScreen;
