import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // 📌 Importamos el navegador de pestañas
import {Image} from 'react-native'; // 📌 Importamos Image para los iconos de las pestañas
import {Mycolors} from '../theme/AppTheme'; // 📌 Importamos colores de la app (tema global)
import {ProfileStackNavigator} from './ProfileStackNavigator'; // 📌 Navegación del perfil
import {MyPostStackNavigator} from './MyPostStackNavigator'; // 📌 Navegación para mis posts
import {PostListStackNavigator} from './PostListStackNavigator'; // 📌 Navegación para la lista de posts
import MarvelScreen from '../views/apimarvel/MarvelScreen'; // 📌 Pantalla de la API de Marvel

// 📌 Definimos los parámetros de cada pestaña (para TypeScript)
export type TabParamList = {
  PostListStackNavigator: undefined;
  MyPostStackNavigator: undefined;
  ProfileStackNavigator: undefined;
  MarvelScreen: undefined;
};

// 📌 Creamos el Tab Navigator con tipado seguro
const Tab = createBottomTabNavigator<TabParamList>();

// 📌 Definimos los iconos antes del return para mejorar la eficiencia
const myListIcon = require('../../../assets/img/my_list.png');
const myPostIcon = require('../../../assets/img/checklist.png');
const profileIcon = require('../../../assets/img/user.png');
const marvelIcon = require('../../../assets/img/info4.png');

// 📌 Configuramos el navegador de pestañas
const TabsNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false, // ❌ Ocultamos el header en todas las pantallas del TabNavigator
      tabBarStyle: {
        backgroundColor: Mycolors.background, // 🎨 Aplicamos un color de fondo al TabBar
      },
    }}>
    {/* 📌 Pestaña para ver la lista de publicaciones */}
    <Tab.Screen
      name="PostListStackNavigator"
      component={PostListStackNavigator}
      options={{
        title: 'Posts',
        tabBarLabel: 'Posts', // 📌 Etiqueta que se muestra en la barra de pestañas
        tabBarActiveTintColor: 'white', // 📌 Color del texto cuando está activa la pestaña
        tabBarIcon: () => (
          <Image source={myListIcon} style={{height: 25, width: 25}} />
        ), // 📌 Icono de la pestaña
      }}
    />

    {/* 📌 Pestaña para ver "Mis Publicaciones" */}
    <Tab.Screen
      name="MyPostStackNavigator"
      component={MyPostStackNavigator}
      options={{
        title: 'Mis Posts',
        tabBarLabel: 'Mis Posts',
        tabBarActiveTintColor: 'white',
        tabBarIcon: () => (
          <Image source={myPostIcon} style={{height: 25, width: 25}} />
        ),
      }}
    />

    {/* 📌 Pestaña para acceder al perfil del usuario */}
    <Tab.Screen
      name="ProfileStackNavigator"
      component={ProfileStackNavigator}
      options={{
        title: 'Perfil',
        tabBarLabel: 'Perfil',
        tabBarActiveTintColor: 'white',
        tabBarIcon: () => (
          <Image source={profileIcon} style={{height: 25, width: 25}} />
        ),
      }}
    />

    {/* 📌 Pestaña para ver la API de Marvel */}
    <Tab.Screen
      name="MarvelScreen"
      component={MarvelScreen}
      options={{
        title: 'Marvel',
        tabBarLabel: 'Marvel',
        tabBarActiveTintColor: 'white',
        tabBarIcon: () => (
          <Image source={marvelIcon} style={{height: 25, width: 25}} />
        ),
      }}
    />
  </Tab.Navigator>
);

// 📌 Exportamos el TabsNavigator para usarlo en `MainStackNavigator`
export default TabsNavigator;
