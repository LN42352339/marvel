import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileInfoScreen} from '../views/profile/info/ProfileInfo';
import {ProfileUpdateScreen} from '../views/profile/update/ProfileUpdate';
import {User} from '../../domain/models/User';
import {MyPostListScreen} from '../views/post/myList/MyPostList';
import {PostCreateScreen} from '../views/post/create/PostCreate';
import {Post} from '../../domain/models/Post';
import {PostUpdateScreen} from '../views/post/update/PostUpdate';

export type MyPostStackParamList = {
  MyPostListScreen: undefined;
  PostCreateScreen: undefined;
  PostUpdateScreen: {post: Post};
};

const Stack = createNativeStackNavigator<MyPostStackParamList>();

export const MyPostStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyPostListScreen" component={MyPostListScreen} />

      <Stack.Screen name="PostCreateScreen" component={PostCreateScreen} />

      <Stack.Screen name="PostUpdateScreen" component={PostUpdateScreen} />
    </Stack.Navigator>
  );
};
