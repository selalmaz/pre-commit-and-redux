import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#90d1c8',
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#008080',
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    height: 40,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
  },
  button: {
    backgroundColor: '#005477',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
