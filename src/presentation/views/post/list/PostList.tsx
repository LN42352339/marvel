import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, FlatList} from 'react-native';
import styles from './Styles';
import {RootStackParamList} from '../../../navigation/MainStackNavigator';
import {TabParamList} from '../../../navigation/TabsNavigator';
import DI from '../../../../di/ioc';
import Toast from 'react-native-simple-toast';
import {PostListItem} from './Item';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PostListStackParamList} from '../../../navigation/PostListStackNavigator';

interface Props
  extends StackScreenProps<PostListStackParamList, 'PostListScreen'> {}

export const PostListScreen = ({navigation, route}: Props) => {
  const {response, error, getPosts, setError} = DI.resolve('PostListViewModel');

  useEffect(() => {
    if (error !== null) {
      if (error !== '') {
        Toast.show(error, Toast.LONG);
        setError('');
      }
    }
  }, [error]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={response}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PostListItem post={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};
