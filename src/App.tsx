import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';
import TabNavigator from './navigation/bottomTab/TabNavigator';

function App() {
  return (
    <Provider store={Store}>
      <TabNavigator></TabNavigator>
    </Provider>
  );
}

export default App;
