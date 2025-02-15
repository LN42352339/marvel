import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PostListScreen} from '../views/post/list/PostList';
import {Image} from 'react-native';
import {MyPostListScreen} from '../views/post/myList/MyPostList';
import {ProfileInfoScreen} from '../views/profile/info/ProfileInfo';
import {Mycolors} from '../theme/AppTheme';
import {ProfileStackNavigator} from './ProfileStackNavigator';
import {MyPostStackNavigator} from './MyPostStackNavigator';
import {PostListStackNavigator} from './PostListStackNavigator';

export type TabParamList = {
  PostListStackNavigator: undefined;
  MyPostStackNavigator: undefined;
  ProfileStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabsNavigator = () => (
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
  </Tab.Navigator>
);
