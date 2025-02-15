import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import styles from './Styles';
import {TabParamList} from '../../../navigation/TabsNavigator';

import DI from '../../../../di/ioc';
import {MyPostListItem} from './Item';
import Toast from 'react-native-simple-toast';
import {MyPostStackParamList} from '../../../navigation/MyPostStackNavigator';

interface Props
  extends StackScreenProps<MyPostStackParamList, 'MyPostListScreen'> {}

export const MyPostListScreen = ({navigation, route}: Props) => {
  const {response, error, getUserSession, setError} = DI.resolve(
    'MyPostListViewModel',
  );

  useEffect(() => {
    if (error !== null) {
      if (error !== '') {
        Toast.show(error, Toast.LONG);
        setError('');
      }
    }
  }, [error]);

  useEffect(() => {
    getUserSession();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={response}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <MyPostListItem post={item} navigation={navigation} />
          )}
        />
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('PostCreateScreen')}
        style={styles.fabContainer}>
        <Image
          source={require('../../../../../assets/img/add.png')}
          style={styles.fab}
        />
      </TouchableOpacity>
    </View>
  );
};
