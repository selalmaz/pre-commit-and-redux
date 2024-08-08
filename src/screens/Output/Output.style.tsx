import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdbdbd',
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
    color: 'white',
    padding: 10,
    margin: 10,
    fontSize: 16,
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
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
