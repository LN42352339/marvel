import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/MainStackNavigator';
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Mycolors, MyStyles} from '../../../theme/AppTheme';
import styles from './Styles';
import {DefaultTextInput} from '../../../components/DefaultTextInput';
import {DefaultButton} from '../../../components/DefaultButton';
import DI from '../../../../di//ioc';
import NavigationBarColor from 'react-native-navigation-bar-color';

NavigationBarColor(Mycolors.background, true); // Cambia el color a rojo y texto claro

interface Props
  extends StackScreenProps<RootStackParamList, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation, route}: Props) => {
  const {
    username,
    email,
    password,
    confirmPassword,
    error,
    setError,
    onChange,
    result,
    register,
    loading,
  } = DI.resolve('RegisterViewModel');

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    // Listener para detectar si el teclado se muestra o se oculta
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // El teclado está visible
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // El teclado está oculto
      },
    );

    return () => {
      // Remover listeners al desmontar el componente
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    if (error !== '') {
      ToastAndroid.show(error, ToastAndroid.LONG);
    }
    setError('');
  }, [error, setError]);

  useEffect(() => {
    if (result) {
      console.log('✅ Usuario Registrado:', result);
      ToastAndroid.show('Usuario Registrado', ToastAndroid.LONG);

      // 🔹 Reemplaza la pantalla actual por HomeScreen para evitar volver al login con "back"
      navigation.replace('LoginScreen');
    }
  }, [result, navigation]);

  return (
    <View style={styles.container}>
      {/* Barra de estado con fondo azul */}
      <StatusBar backgroundColor={Mycolors.primary} barStyle="light-content" />

      {/* Fondo azul y SVG */}
      <View style={styles.headerBackground}>
        <Svg viewBox="0 0 1440 320" style={styles.svg}>
          <Path
            fill={Mycolors.primary}
            fillOpacity="1"
            d="M0,288L34.3,272C68.6,256,137,224,206,224C274.3,224,343,256,411,266.7C480,277,549,267,617,224C685.7,181,754,107,823,85.3C891.4,64,960,96,1029,144C1097.1,192,1166,256,1234,261.3C1302.9,267,1371,213,1406,186.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          />
        </Svg>
      </View>

      {/* Contenido */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.arrow_back_container}
          onPress={() => navigation.pop()}>
          <Image
            source={require('../../../../../assets/img/back.png')}
            style={styles.arrow_back}
          />

          {/* Imagen de registro con opacidad dinámica */}
          <Image
            source={require('../../../../../assets/img/register.png')}
            style={[
              styles.image2,
              {opacity: isKeyboardVisible ? 0.2 : 1}, // Cambia la opacidad según el estado del teclado
            ]}
          />
        </TouchableOpacity>

        <View style={{flex: 1}} />

        {/* Campos de entrada */}
        <DefaultTextInput
          placeholder="Nombre de usuario"
          image={require('../../../../../assets/img/user_image.png')}
          prop="username"
          value={username}
          onChangeText={onChange}
        />

        <DefaultTextInput
          placeholder="Email"
          image={require('../../../../../assets/img/email.png')}
          prop="email"
          value={email}
          onChangeText={onChange}
        />

        <DefaultTextInput
          placeholder="Contraseña"
          image={require('../../../../../assets/img/password.png')}
          prop="password"
          value={password}
          onChangeText={onChange}
        />

        <DefaultTextInput
          placeholder="Confirmar Contraseña"
          image={require('../../../../../assets/img/password.png')}
          prop="confirmPassword"
          value={confirmPassword}
          onChangeText={onChange}
        />

        <DefaultButton
          text="  Regístrate"
          onPress={() => register()}
          //image={require('../../../../../assets/img/icohulk.png')}
        />
      </View>
      {loading && (
        <ActivityIndicator
          size="large"
          color={Mycolors.primary}
          style={MyStyles.loading}
        />
      )}
    </View>
  );
};
