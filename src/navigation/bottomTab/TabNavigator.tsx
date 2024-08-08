import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {tabParamList} from '../types/types';
import InputStack from '../StackNav/InputStack';
import OutputStack from '../StackNav/OutputStack';

const Tab = createBottomTabNavigator<tabParamList>();

const TabNavigator = () => {
  return (
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
          component={InputStack}
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
          component={OutputStack}
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
  );
};

export default TabNavigator;
