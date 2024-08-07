import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  const onChange = () => {
    console.log(name + ' ' + surname + ' ' + age);
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="adinizi giriniz"
          value={name}
          onChangeText={setName}
          onChange={onChange}></TextInput>
        <TextInput
          style={style.input}
          placeholder="soyadinizi giriniz"
          value={surname}
          onChangeText={setSurname}
          onChange={onChange}></TextInput>
        <TextInput
          style={style.input}
          placeholder="yasinizi giriniz"
          value={age}
          onChangeText={setAge}
          onChange={onChange}></TextInput>
      </View>
      <View style={style.outputContainer}>
        <Text style={style.output}>Adiniz: {name}</Text>
        <Text style={style.output}>Soyadiniz: {surname}</Text>
        <Text style={style.output}>Yasinizi: {age}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#dbdbdb',
  },
  input: {
    width: '85%',
    height: 40,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  outputContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#bdbdbd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    height: 40,
    width: '85%',
    borderWidth: 1,
    textAlignVertical: 'center',
    borderRadius: 5,
    color: 'white',
    padding: 10,
    margin: 10,
    fontSize: 16,
  },
});
