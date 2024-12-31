import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/MainStackNavigator';
import {View, Text} from 'react-native';

interface Props
  extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation, router}: Props) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
};
