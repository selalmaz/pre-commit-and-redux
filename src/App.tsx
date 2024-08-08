import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';
import TabNavigator from './navigation/bottomTab/TabNavigator';
import StackScreen1 from './screens/StackScreen1';
import StackScreen2 from './screens/StackScreen2';
import StackScrren3 from './screens/StackScrren3';

function App() {
  return (
    <Provider store={Store}>
      <StackScrren3></StackScrren3>
    </Provider>
  );
}

export default App;
