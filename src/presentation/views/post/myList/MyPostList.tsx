import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import styles from './Styles';
import {TabParamList} from '../../../navigation/TabsNavigator';

interface Props extends StackScreenProps<TabParamList, 'MyPostListScreen'> {}

export const MyPostListScreen = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <Text>MyPostListScreen </Text>
    </View>
  );
};
