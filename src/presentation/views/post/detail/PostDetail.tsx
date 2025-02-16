import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {StackScreenProps} from '@react-navigation/stack';
import {PostListStackParamList} from '../../../navigation/PostListStackNavigator';
import DI from '../../../../di/ioc';
import {useEffect} from 'react';

interface Props
  extends StackScreenProps<PostListStackParamList, 'PostDetailScreen'> {}

export const PostDetailScreen = ({navigation, route}: Props) => {
  const {post} = route.params;
  const {user, getUserById} = DI.resolve('PostDetailViewModel');

  useEffect(() => {
    getUserById(post.idUser);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{uri: post.image}} style={styles.postImage} />
      <TouchableOpacity
        style={styles.arrow_back_container}
        onPress={() => navigation.pop()}>
        <Image
          source={require('../../../../../assets/img/back.png')}
          style={styles.arrow_back}
        />
      </TouchableOpacity>
      <View style={styles.userContainer}>
        {user !== undefined && user !== null && (
          <Image source={{uri: user.image}} style={styles.userImage} />
        )}

        <View style={styles.userInfo}>
          <Text style={styles.username}>{user?.username ?? ''}</Text>
          <Text style={styles.email}>{user?.email ?? ''}</Text>
        </View>
      </View>
      <Text style={styles.postName}>{post.name}</Text>
      <View style={styles.categoryContainer}>
        {post.category === 'SUPERHÉROES' && (
          <Image
            source={require('../../../../../assets/img/icono_cat.png')}
            style={styles.categoryImage}
          />
        )}
        {post.category === 'MARVEL CÓSMICO' && (
          <Image
            source={require('../../../../../assets/img/cat_2.png')}
            style={styles.categoryImage}
          />
        )}
        {post.category === 'VILLANOS Y ANTIHÉROES' && (
          <Image
            source={require('../../../../../assets/img/icono_cat4.png')}
            style={styles.categoryImage}
          />
        )}
        <Text style={styles.categoryName}>{post.category}</Text>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.descriptionTitle}>Descripcion</Text>
      <Text style={styles.description}>{post.description}</Text>
    </View>
  );
};
