import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import {View} from 'react-native';
import styles from './Styles';
import {DefaultButton} from '../../components/DefaultButton';
import DI from '../../../di/ioc';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({navigation, route}: Props) => {
  const {result, logout} = DI.resolve('HomeViewModel');

  useEffect(() => {
    if (result === true) {
      navigation.replace('LoginScreen');
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <DefaultButton onPress={() => logout()} text="Cerrar sesion" />
    </View>
  );
};
