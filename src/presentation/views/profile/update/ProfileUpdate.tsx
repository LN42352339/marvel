import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../navigation/ProfileStackNavigator';
import {useEffect} from 'react';
import {DefaultButton} from '../../../components/DefaultButton';
import styles from './Styles';
import {DefaultTextInput} from '../../../components/DefaultTextInput';
import DI from '../../../../di/ioc';
import Toast from 'react-native-simple-toast';
import {Mycolors, MyStyles} from '../../../theme/AppTheme';

interface Props
  extends StackScreenProps<ProfileStackParamList, 'ProfileUpdateScreen'> {}

export const ProfileUpdateScreen = ({navigation, route}: Props) => {
  const {user} = route.params;
  const {
    username,
    image,
    error,
    response,
    file,
    loading,
    onChange,
    setValues,
    pickImage,
    takePhoto,
    update,
    updateWithImage,
    setError,
  } = DI.resolve('ProfileUpdateViewModel');

  useEffect(() => {
    console.log('User param: ', user);
    setValues(user);
  }, []);

  useEffect(() => {
    if (error !== null) {
      if (error !== '') {
        Toast.show(error, Toast.LONG);
        setError('');
      }
    }
  }, [error]);

  useEffect(() => {
    if (response) {
      Toast.show('Usuario actualizado correctamente', Toast.LONG);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../../assets/img/fondoperfil.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.darkness}></View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.arrow_back_container}
        onPress={() => navigation.pop()}>
        <Image
          source={require('../../../../../assets/img/back.png')}
          style={styles.arrow_back}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.arrow_back_container}
        onPress={() => navigation.pop()}>
        <Image
          source={require('../../../../../assets/img/back.png')}
          style={styles.arrow_back}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Perfil de usuario</Text>
      <TouchableOpacity
        style={styles.profileImageContainer}
        onPress={() => pickImage()}>
        {image == undefined || image == '' ? (
          <Image
            source={require('../../../../../assets/img/user_image.png')}
            style={styles.profileImage}
          />
        ) : (
          <Image source={{uri: image}} style={styles.profileImage} />
        )}
      </TouchableOpacity>

      <View style={{marginTop: 90}}></View>
      <DefaultTextInput
        placeholder="Nombre de usuario"
        prop="username"
        onChangeText={onChange}
        value={username}
        image={require('../../../../../assets/img/user_image.png')}
      />

      <View style={{flex: 1}}></View>
      <View style={{marginBottom: 30, alignItems: 'center'}}>
        <DefaultButton
          text="Actualizar"
          onPress={() => update()}
          image={require('../../../../../assets/img/actualizar.png')}
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
