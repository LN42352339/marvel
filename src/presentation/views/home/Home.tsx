import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/MainStackNavigator';
import {View} from 'react-native';
import styles from './Styles';
import {DefaultButton} from '../../components/DefaultButton';
import DI from '../../../di/ioc';

// 📌 Definimos las propiedades de la pantalla usando StackScreenProps para TypeScript
interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  // 📌 Inyección de dependencias: obtenemos el ViewModel
  const {logout} = DI.resolve('HomeViewModel');

  // 📌 Función para cerrar sesión con manejo de errores
  const handleLogout = async () => {
    try {
      await logout(); // 🛑 Esperamos a que termine el logout antes de continuar
      navigation.replace('LoginScreen'); // 🔄 Redirigimos al login tras cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* 📌 Botón para cerrar sesión */}
      <DefaultButton onPress={handleLogout} text="Cerrar sesión" />
    </View>
  );
};
