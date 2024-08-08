import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dbdbdb',
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
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
    borderWidth: 1,
    borderColor: 'black',
  },
});
