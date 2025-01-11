<<<<<<< HEAD
import React, { useEffect } from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, Image, StatusBar, TouchableOpacity, ToastAndroid} from 'react-native';
=======
import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
  Animated,
} from 'react-native';
>>>>>>> origin/dev
import Svg, {Path} from 'react-native-svg';
import styles from './Styles';
import {DefaultTextInput} from '../../../components/DefaultTextInput';
import {DefaultButton} from '../../../components/DefaultButton';
import {Mycolors} from '../../../theme/AppTheme';
import {RootStackParamList} from '../../../navigation/MainStackNavigator';
import DI from '../../../di/ioc';

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}

export const LoginScreen = ({navigation, route}: Props) => {
<<<<<<< HEAD
  const {email, password, onChange, login, error, setError} = DI.resolve('LoginViewModel');

  useEffect(() => {
    if (error !== ''){
      ToastAndroid.show(error, ToastAndroid.LONG);
    }
    setError('');
  }, [error])
  

  return (
    <View style={styles.container}>
      {/* Barra de estado con fondo azul */}
      <StatusBar backgroundColor={Mycolors.primary} barStyle="light-content" />

      {/* Fondo azul y SVG */}
=======
  const {email, password, onChange, login, error, setError} =
    DI.resolve('LoginViewModel');

  const [imageOpacity] = useState(new Animated.Value(1)); // Valor inicial de opacidad

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // Animar la opacidad a 0.5 cuando se muestra el teclado
        Animated.timing(imageOpacity, {
          toValue: 0.4,
          duration: 300,
          useNativeDriver: true,
        }).start();
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // Animar la opacidad de regreso a 1 cuando el teclado se oculta
        Animated.timing(imageOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      },
    );

    return () => {
      // Limpiar los listeners
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [imageOpacity]);

  useEffect(() => {
    if (error !== '') {
      ToastAndroid.show(error, ToastAndroid.LONG);
    }
    setError('');
  }, [error, setError]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Mycolors.primary} barStyle="light-content" />
>>>>>>> origin/dev
      <View style={styles.headerBackground}>
        <Svg viewBox="0 0 1440 320" style={styles.svg}>
          <Path
            fill={Mycolors.primary}
            fillOpacity="1"
            d="M0,288L34.3,272C68.6,256,137,224,206,224C274.3,224,343,256,411,266.7C480,277,549,267,617,224C685.7,181,754,107,823,85.3C891.4,64,960,96,1029,144C1097.1,192,1166,256,1234,261.3C1302.9,267,1371,213,1406,186.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          />
        </Svg>
      </View>
<<<<<<< HEAD

      {/* Contenido */}
      <View style={styles.content}>
        <Image
          source={require('../../../../../assets/img/marvel8.png')}
          style={styles.image}
        />
        <Image
          source={require('../../../../../assets/img/teladearana.png')}
          style={styles.image3}
        />
        <Image
          source={require('../../../../../assets/img/marvellogin.png')}
          style={styles.image2}
=======
      <View style={styles.content}>
        {/* Usar Animated.Image para aplicar la opacidad */}
        <Animated.Image
          source={require('../../../../../assets/img/marvel8.png')}
          style={[styles.image, {opacity: imageOpacity}]}
        />
        <Animated.Image
          source={require('../../../../../assets/img/teladearana.png')}
          style={[styles.image3, {opacity: imageOpacity}]}
        />
        <Animated.Image
          source={require('../../../../../assets/img/marvellogin.png')}
          style={[styles.image2, {opacity: imageOpacity}]}
>>>>>>> origin/dev
        />
        <DefaultTextInput
          placeholder="Correo Electrónico"
          image={require('../../../../../assets/img/email.png')}
          prop="email"
          value={email}
          onChangeText={onChange}
        />
<<<<<<< HEAD

=======
>>>>>>> origin/dev
        <DefaultTextInput
          placeholder="Contraseña"
          image={require('../../../../../assets/img/password.png')}
          prop="password"
          value={password}
          secureTextEntry={true}
          onChangeText={onChange}
        />
<<<<<<< HEAD

        <DefaultButton
          text="Inicia sesión"
          onPress={() => login()}
          
        />
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.textRegister}>REGISTRATE AHORA</Text>
=======
        <DefaultButton text="Inicia sesión" onPress={() => login()} />
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.textRegister}>REGÍSTRATE AHORA</Text>
>>>>>>> origin/dev
        </TouchableOpacity>
      </View>
    </View>
  );
};
