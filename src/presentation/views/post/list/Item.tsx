import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Post} from '../../../../domain/models/Post';
import {StackNavigationProp} from '@react-navigation/stack';
import {PostListStackParamList} from '../../../navigation/PostListStackNavigator';
import DI from '../../../../di/ioc';
import {like} from '../../../../data/datasource/remote/PostsDataSource';

interface Props {
  post: Post;
  navigation: StackNavigationProp<
    PostListStackParamList,
    'PostListScreen',
    undefined
  >;
}

export const PostListItem = ({post, navigation}: Props) => {
  const {like, dislike, getUserSession} = DI.resolve('PostListViewModel');

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostDetailScreen', {post: post})}
      style={styles.container}>
      <Image source={{uri: post.image}} style={styles.postImage} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.username}>{post.idUser}</Text>
          <Text style={styles.description}>{post.description}</Text>
        </View>
        <View style={{flex: 1}}></View>
        <View style={styles.likesContainer}>
          {post.likes?.includes(getUserSession().uid) ? (
            <TouchableOpacity onPress={() => dislike(post.id)}>
              <Image
                source={require('../../../../../assets/img/like.png')}
                style={styles.like}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => like(post.id)}>
              <Image
                source={require('../../../../../assets/img/dislike.png')}
                style={styles.like}
              />
            </TouchableOpacity>
          )}

          <Text style={styles.likesCounter}>{post.likes?.length ?? 0}</Text>
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
  infoContainer: {
    flexDirection: 'row',
  },
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    height: 30,
    width: 30,
  },
  likesCounter: {
    color: 'white',
    fontSize: 20,
    marginRight: 15,
    marginLeft: 6,
  },
});
