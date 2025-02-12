import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PostListScreen} from '../views/post/list/PostList';
import {Image} from 'react-native';
import {MyPostListScreen} from '../views/post/myList/MyPostList';
import {ProfileInfoScreen} from '../views/profile/info/ProfileInfo';
import {Mycolors} from '../theme/AppTheme';
import {ProfileStackNavigator} from './ProfileStackNavigator';

export type TabParamList = {
  PostListScreen: undefined;
  MyPostListScreen: undefined;
  ProfileStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Mycolors.background,
        },
        tabBarActiveTintColor: 'white', // Color de texto activo
        tabBarInactiveTintColor: 'black', // Color de texto inactivo
      }}>
      <Tab.Screen
        name="PostListScreen"
        component={PostListScreen}
        options={{
          title: 'Posts',
          tabBarLabel: 'Posts',
          tabBarActiveTintColor: 'white',
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../../assets/img/my_list.png')}
                style={{height: 25, width: 25}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="MyPostListScreen"
        component={MyPostListScreen}
        options={{
          title: 'My Posts',
          tabBarLabel: 'My Posts',
          tabBarActiveTintColor: 'white',
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../../assets/img/checklist.png')}
                style={{height: 25, width: 25}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
        options={{
          title: 'Perfil',
          tabBarLabel: 'Perfil',
          tabBarActiveTintColor: 'white',
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../../assets/img/user.png')}
                style={{height: 25, width: 25}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
