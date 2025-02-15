import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileInfoScreen} from '../views/profile/info/ProfileInfo';
import {ProfileUpdateScreen} from '../views/profile/update/ProfileUpdate';
import {User} from '../../domain/models/User';
import {MyPostListScreen} from '../views/post/myList/MyPostList';
import {PostCreateScreen} from '../views/post/create/PostCreate';
import {PostListScreen} from '../views/post/list/PostList';
import {PostDetailScreen} from '../views/post/detail/PostDetail';
import {Post} from '../../domain/models/Post';

export type PostListStackParamList = {
  PostListScreen: undefined;
  PostDetailScreen: {post: Post};
};

const Stack = createNativeStackNavigator<PostListStackParamList>();

export const PostListStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PostListScreen" component={PostListScreen} />

      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};
