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
import {RadioButton} from '../../../components/RadioButton';
import {DefaultButton} from '../../../components/DefaultButton';
import DI from '../../../../di/ioc';
import Toast from 'react-native-simple-toast';
import {Mycolors, MyStyles} from '../../../theme/AppTheme';

interface Props
  extends StackScreenProps<MyPostStackParamList, 'PostUpdateScreen'> {}

export const PostUpdateScreen = ({navigation, route}: Props) => {
  const {post} = route.params;

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
    updatePost,
    getUser,
    setError,
    setValues,
    setRadioValue,
  } = DI.resolve('PostUpdateViewModel');

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
    setValues(post);
    setRadioValue(post.category);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => pickImage()}
        style={styles.backgroundImage}>
        {image !== undefined && image !== '' ? (
          <Image source={{uri: image}} style={styles.fileImage} />
        ) : (
          <Image source={{uri: post.image}} style={styles.fileImage} />
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
      <View style={{marginTop: 30}}></View>
      <DefaultTextInput
        placeholder="Nombre del Post"
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
            text="Actualizar post"
            onPress={() => updatePost()}
            image={require('../../../../../assets/img/actualizar.png')}
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
