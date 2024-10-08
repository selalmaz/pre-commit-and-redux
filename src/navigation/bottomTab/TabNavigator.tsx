import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {tabParamList} from '../types/types';
import InputStack from '../StackNav/InputStack';
import OutputStack from '../StackNav/OutputStack';
import styles from './TabNavigator.style';

const Tab = createBottomTabNavigator<tabParamList>();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}>
        <Tab.Screen
          name="inputPage"
          component={InputStack}
          options={{
            tabBarLabel: 'Input',
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={focused ? 'upload-outline' : 'cloud-question'}
                color={focused ? '#48bf91' : '#8ac6c0'}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="outputPage"
          component={OutputStack}
          options={{
            tabBarLabel: 'Output',
            tabBarIcon: ({focused, color, size}) => (
              <MaterialCommunityIcons
                name={focused ? 'download-outline' : 'cloud-question'}
                color={focused ? '#48bf91' : '#8ac6c0'}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
