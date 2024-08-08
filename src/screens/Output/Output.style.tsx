import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90d1c8',
    padding: 20,
  },
  outputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  output: {
    height: 40,
    width: '85%',
    borderWidth: 1,
    textAlignVertical: 'center',
    borderRadius: 5,
    color: 'black',
    padding: 10,
    margin: 10,
    fontSize: 16,
    borderColor: 'black',
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#008080',
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
