import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../views/auth/login/Login'; // 📌 Pantalla de inicio de sesión
import {RegisterScreen} from '../views/auth/register/Register'; // 📌 Pantalla de registro
import {HomeScreen} from '../views/home/Home'; // 📌 Pantalla principal después de iniciar sesión
import TabsNavigator from './TabsNavigator'; // 📌 Navegador de pestañas (bottom tabs)

// 📌 Definimos los parámetros de navegación (opcional pero recomendado para TypeScript)
export type RootStackParamList = {
  LoginScreen: undefined; // No recibe parámetros
  RegisterScreen: undefined; // No recibe parámetros
  HomeScreen: undefined; // No recibe parámetros
  TabsNavigator: undefined; // No recibe parámetros
};

// 📌 Creamos el Stack Navigator con tipado seguro
const Stack = createNativeStackNavigator<RootStackParamList>();

// 📌 Definimos el navegador principal de la app
export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // ❌ Oculta el header por defecto
      }}>
      {/* 📌 Pantallas del stack */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
    </Stack.Navigator>
  );
};
