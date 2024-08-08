import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import style from './Output.style';
import {useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {OutputStackParamList} from '../../navigation/types/types';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

type props = NativeStackScreenProps<OutputStackParamList>;

const OutputPage = ({navigation}: props) => {
  const {name, surname, age} = useSelector((state: StateType) => state.person);

  function goToStack3() {
    navigation.navigate('StackScreen3');
  }

  return (
    <View style={style.container}>
      <Text style={style.header}>Second Component</Text>

      <View style={style.outputContainer}>
        <Text style={style.output}>Adiniz: {name}</Text>
        <Text style={style.output}>Soyadiniz: {surname}</Text>
        <Text style={style.output}>Yasinizi: {age}</Text>
      </View>

      <TouchableOpacity style={style.button} onPress={goToStack3}>
        <Text style={style.buttonText}>Sayfa ikiye geçis yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OutputPage;
