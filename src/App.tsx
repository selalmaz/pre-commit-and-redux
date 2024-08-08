import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';
import TabNavigator from './navigation/bottomTab/TabNavigator';
import StackScreen1 from './screens/StackScreen1';
import StackScreen2 from './screens/StackScreen2';
import StackScrren3 from './screens/StackScrren3';
import Input from './screens/Input';

function App() {
  return (
    <Provider store={Store}>
      <TabNavigator></TabNavigator>
    </Provider>
  );
}

export default App;
