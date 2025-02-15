import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './Styles';
import {MyPostStackParamList} from '../../../navigation/MyPostStackNavigator';
import {DefaultTextInput} from '../../../components/DefaultTextInput';
import {DefaultButton} from '../../../components/DefaultButton';
import DI from '../../../../di/ioc';
import Toast from 'react-native-simple-toast';
import {Mycolors, MyStyles} from '../../../theme/AppTheme';
import {RadioButton} from '../../../components/RadioButton';

interface Props
  extends StackScreenProps<MyPostStackParamList, 'PostCreateScreen'> {}

export const PostCreateScreen = ({navigation, route}: Props) => {
  const {
    image,
    name,
    description,
    file,
    error,
    loading,
    response,
    categories,
    onChange,
    takePhoto,
    pickImage,
    onRadioChange,
    createPost,
    getUser,
    setError,
  } = DI.resolve('PostCreateViewModel');

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
      Toast.show('La publicacion se ha creado correctamente', Toast.LONG);
    }
  }, [response]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      

      <TouchableOpacity
        onPress={() => pickImage()}
        style={styles.backgroundImage}>
        {image === undefined || image === '' ? (
          <View>
            <Image
              source={require('../../../../../assets/img/add_image.png')}
              style={styles.selectImage}
            />
            <Text style={styles.textImage}>SELECCIONA UNA IMAGEN</Text>
          </View>
        ) : (
          <Image source={{uri: image}} style={styles.fileImage} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.arrow_back_container}
        onPress={() => navigation.pop()}>
        <Image
          source={require('../../../../../assets/img/back.png')}
          style={styles.arrow_back}
        />
      </TouchableOpacity>

      <View style={{marginTop: 10}}></View>
      <DefaultTextInput
        placeholder="Nombre del post"
        value={name}
        onChangeText={onChange}
        prop="name"
        image={require('../../../../../assets/img/post.png')}
      />
      <DefaultTextInput
        placeholder="Descripcion"
        value={description}
        onChangeText={onChange}
        prop="description"
        image={require('../../../../../assets/img/checklist.png')}
      />
      <Text style={styles.textCategory}>CATEGORIAS</Text>
      <View>
        {categories.map(category => (
          <RadioButton
            key={category.name}
            children={category.name}
            selected={category.selected}
            onPress={() => onRadioChange(category)}
            image={category.image}
          />
        ))}
        <View style={{alignItems: 'center', marginTop: 30}}>
          <DefaultButton
            text="Crear post"
            onPress={() => createPost()}
            image={require('../../../../../assets/img/aceptar.png')}
          />
        </View>
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
