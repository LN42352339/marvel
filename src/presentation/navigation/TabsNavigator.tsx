import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {Mycolors} from '../theme/AppTheme';
import {ProfileStackNavigator} from './ProfileStackNavigator';
import {MyPostStackNavigator} from './MyPostStackNavigator';
import {PostListStackNavigator} from './PostListStackNavigator';
import MarvelScreen from '../views/apimarvel/MarvelScreen'; // ✅ Importación corregida

export type TabParamList = {
  PostListStackNavigator: undefined;
  MyPostStackNavigator: undefined;
  ProfileStackNavigator: undefined;
  MarvelScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabsNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: Mycolors.background,
      },
    }}>
    <Tab.Screen
      name="PostListStackNavigator"
      component={PostListStackNavigator}
      options={{
        title: 'Posts',
        tabBarLabel: 'Posts',
        tabBarActiveTintColor: 'white',
        tabBarIcon: () => (
          <Image
            source={require('../../../assets/img/my_list.png')}
            style={{height: 25, width: 25}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="MyPostStackNavigator"
      component={MyPostStackNavigator}
      options={{
        title: 'Mis Posts',
        tabBarLabel: 'Mis Posts',
        tabBarActiveTintColor: 'white',
        tabBarIcon: () => (
          <Image
            source={require('../../../assets/img/checklist.png')}
            style={{height: 25, width: 25}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileStackNavigator"
      component={ProfileStackNavigator}
      options={{
        title: 'Perfil',
        tabBarLabel: 'Perfil',
        tabBarActiveTintColor: 'white',
        tabBarIcon: () => (
          <Image
            source={require('../../../assets/img/user.png')}
            style={{height: 25, width: 25}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="MarvelScreen"
      component={MarvelScreen}
      options={{
        title: 'Marvel',
        tabBarLabel: 'Marvel',
        tabBarActiveTintColor: 'white',
        tabBarIcon: () => (
          <Image
            source={require('../../../assets/img/info4.png')}
            style={{height: 25, width: 25}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

// ✅ Exportar por defecto para evitar problemas de importación
export default TabsNavigator;
