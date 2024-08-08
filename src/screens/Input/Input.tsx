import React from 'react';
import {View, TextInput, Text} from 'react-native';
import style from './Input.style';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../redux/Store';
import {setAge, setName, setSurname} from '../../redux/Slice';
import {TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {InputStackParamList} from '../../navigation/types/types';

type props = NativeStackScreenProps<InputStackParamList>;

const InputPage = ({navigation}: props) => {
  const {name, surname, age} = useSelector((state: StateType) => state.person);
  const dispatch = useDispatch();

  function goToStack1() {
    navigation.navigate('StackScreen1');
  }

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

      <TouchableOpacity style={style.button} onPress={goToStack1}>
        <Text style={style.buttonText}>Sayfa bire geçis yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPage;
