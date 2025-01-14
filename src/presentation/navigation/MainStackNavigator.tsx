import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from '../views/auth/register/Register';
import {LoginScreen} from '../views/auth/login/Login';

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigartor = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
