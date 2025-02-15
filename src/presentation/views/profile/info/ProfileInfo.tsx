import React, {useEffect} from 'react';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {View, ImageBackground, Text, Image} from 'react-native';
import styles from './Styles';
import {DefaultButton} from '../../../components/DefaultButton';
import DI from '../../../../di/ioc';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/MainStackNavigator';
import Toast from 'react-native-simple-toast';
import {ProfileStackParamList} from '../../../navigation/ProfileStackNavigator';

interface Props
  extends StackScreenProps<ProfileStackParamList, 'ProfileInfoScreen'> {}

export const ProfileInfoScreen = ({navigation}: Props) => {
  const {result, user, error, logout, getUserSession, setError} = DI.resolve(
    'ProfileInfoViewModel',
  );
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>();

  // ✅ Muestra errores en Toast y limpia error después
  useEffect(() => {
    if (error && error !== '') {
      Toast.show(error, Toast.LONG);
      setError('');
    }
  }, [error]);

  // ✅ Obtiene el usuario si no está autenticado
  useEffect(() => {
    if (!user) {
      console.log('🔍 Llamando a getUserSession() para obtener usuario.');
      getUserSession();
    }
  }, []);

  // ✅ Si el usuario cerró sesión, redirige al login
  useEffect(() => {
    if (result) {
      console.log('🔴 Usuario cerró sesión. Redirigiendo a LoginScreen...');
      nav.replace('LoginScreen');
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../../assets/img/fondoperfil.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.darkness}></View>
      </ImageBackground>

      <Text style={styles.title}>Perfil de usuario</Text>

      {/* Imagen de perfil */}
      {user?.image ? (
        <Image source={{uri: user.image}} style={styles.profileImage} />
      ) : (
        <Image
          source={require('../../../../../assets/img/user_image.png')}
          style={styles.profileImage}
        />
      )}

      {/* Información del usuario */}
      <Text style={styles.usernameText}>{user?.username ?? ' Usuario'}</Text>
      <Text style={styles.emailText}>
        {user?.email ?? 'Correo no disponible'}
      </Text>

      <View style={{flex: 1}}></View>

      {/* Botón Editar Perfil */}
      <View style={{marginBottom: 15, alignItems: 'center'}}>
        <DefaultButton
          text="Editar Perfil"
          onPress={() => navigation.navigate('ProfileUpdateScreen', {user})}
          image={require('../../../../../assets/img/editarp.png')}
        />
      </View>

      {/* Botón Cerrar Sesión */}
      <View style={{marginBottom: 30, alignItems: 'center'}}>
        <DefaultButton
          text="Cerrar Sesión"
          onPress={() => {
            console.log('👋 Botón de Cerrar Sesión presionado.');
            logout();
          }}
          image={require('../../../../../assets/img/close.png')}
        />
      </View>
    </View>
  );
};
