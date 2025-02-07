import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import {View, Text} from 'react-native';
import styles from './Styles';
import {DefaultButton} from '../../components/DefaultButton';
import DI from '../../../di/ioc';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({navigation, route}: Props) => {
  const {user, result, logout} = DI.resolve('HomeViewModel');

  useEffect(() => {
    if (result === true) {
      navigation.replace('LoginScreen');
    }
  }, [result, navigation]);

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 18, marginBottom: 20}}>
        Bienvenido {user?.email || 'Usuario Desconocido'} 👋
      </Text>
      <DefaultButton onPress={() => logout()} text="Cerrar Sesión" />
    </View>
  );
};
