import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Home from '../views/Home';
import List from '../views/List';

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
};

export type ViewType = keyof RootStackParamList;

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
