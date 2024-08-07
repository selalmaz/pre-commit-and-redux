import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import style from './First.style';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../redux/Store';
import {setAge, setName, setSurname} from '../redux/Slice';

const First = () => {
  const {name, surname, age} = useSelector((state: StateType) => state.person);
  const dispatch = useDispatch();

  const onChange = () => {};

  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.input}
        placeholder="adinizi giriniz"
        value={name}
        onChangeText={text => dispatch(setName(text))}
        onChange={onChange}></TextInput>
      <TextInput
        style={style.input}
        placeholder="soyadinizi giriniz"
        value={surname}
        onChangeText={text => dispatch(setSurname(text))}
        onChange={onChange}></TextInput>
      <TextInput
        style={style.input}
        placeholder="yasinizi giriniz"
        value={age}
        onChangeText={text => {
          dispatch(setAge(text));
        }}></TextInput>
    </View>
  );
};

export default First;
