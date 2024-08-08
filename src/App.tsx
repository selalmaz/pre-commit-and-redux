import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';
import First from './First/First';
import Second from './Second/Second';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#ededed',
              height: 60,
            },
          }}>
          <Tab.Screen
            name="inputPage"
            component={First}
            options={({route}) => ({
              tabBarLabel: 'Input',
              tabBarIcon: ({focused, color, size}) => (
                <MaterialCommunityIcons
                  name={focused ? 'upload-outline' : 'cloud-question'}
                  color={color}
                  size={size}
                />
              ),
            })}
          />
          <Tab.Screen
            name="outputPage"
            component={Second}
            options={({route}) => ({
              tabBarLabel: 'Output',
              tabBarIcon: ({focused, color, size}) => (
                <MaterialCommunityIcons
                  name={focused ? 'download-outline' : 'cloud-question'}
                  color={color}
                  size={size}
                />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
