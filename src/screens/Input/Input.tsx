import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import style from './Input.style';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {setAge, setName, setSurname} from '../../redux/Slice';

const InputPage = () => {
  const {name, surname, age} = useSelector((state: StateType) => state.person);
  const dispatch = useDispatch();

  return (
    <View style={style.container}>
      <Text style={style.header}>First Component</Text>

      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="adinizi giriniz"
          value={name}
          onChangeText={text => dispatch(setName(text))}></TextInput>
        <TextInput
          style={style.input}
          placeholder="soyadinizi giriniz"
          value={surname}
          onChangeText={text => dispatch(setSurname(text))}></TextInput>
        <TextInput
          style={style.input}
          placeholder="yasinizi giriniz"
          value={age}
          onChangeText={text => {
            dispatch(setAge(text));
          }}></TextInput>
      </View>
    </View>
  );
};

export default InputPage;
