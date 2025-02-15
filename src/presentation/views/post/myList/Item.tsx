import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostListStackParamList} from '../../../navigation/PostListStackNavigator';
import {MyPostStackParamList} from '../../../navigation/MyPostStackNavigator';
import DI from '../../../../di/ioc';
import {Post} from '../../../../domain/models/Post';

interface Props {
  post: Post;
  navigation: StackNavigationProp<
    MyPostStackParamList,
    'MyPostListScreen',
    undefined
  >;
}

export const MyPostListItem = ({post, navigation}: Props) => {
  const {removePost} = DI.resolve('MyPostListViewModel');
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostUpdateScreen', {post: post})}
      style={styles.container}>
      <Image source={{uri: post.image}} style={styles.postImage} />
      <View style={styles.postInfo}>
        <View>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.description}>{post.description}</Text>
        </View>
        <View style={{flex: 1}}></View>
        <View style={styles.actions}>
          <Image
            source={require('../../../../../assets/img/pencil.png')}
            style={styles.edit}
          />
          <TouchableOpacity onPress={() => removePost(post.id)}>
            <Image
              source={require('../../../../../assets/img/bin.png')}
              style={styles.remove}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: '#2b2d37',
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
  },
  username: {
    color: 'gray',
    marginLeft: 20,
    marginTop: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
  },
  actions: {
    marginRight: 15,
  },
  edit: {
    width: 25,
    height: 25,
    marginTop: 17,
    marginBottom: 13,
  },
  remove: {
    width: 25,
    height: 25,
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
