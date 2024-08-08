import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import style from './Output.style';
import {useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';

const OutputPage = () => {
  const {name, surname, age} = useSelector((state: StateType) => state.person);

  return (
    <View style={style.container}>
      <Text style={style.header}>Second Component</Text>

      <View style={style.outputContainer}>
        <Text style={style.output}>Adiniz: {name}</Text>
        <Text style={style.output}>Soyadiniz: {surname}</Text>
        <Text style={style.output}>Yasinizi: {age}</Text>
      </View>
    </View>
  );
};

export default OutputPage;
