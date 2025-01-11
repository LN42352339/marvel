import React from 'react';
<<<<<<< HEAD
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from '../views/auth/register/Register';
import { LoginScreen } from '../views/auth/login/Login';
=======
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from '../views/auth/register/Register';
import {LoginScreen} from '../views/auth/login/Login';
>>>>>>> origin/dev

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigartor = () => {
  return (
    <Stack.Navigator
      screenOptions={{
<<<<<<< HEAD
        headerShown: false
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />

=======
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
>>>>>>> origin/dev
    </Stack.Navigator>
  );
};
