import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {Mycolors} from '../theme/AppTheme';

const ImageColorTest = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');

  const imageUrl =
    'https://i.annihil.us/u/prod/marvel/i/mg/3/00/531771756f6c7.jpg'; // URL de prueba

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const colors = await ImageColors.getColors(imageUrl, {
          fallback: '#FFFFFF',
          cache: true,
          key: imageUrl,
        });

        console.log('🔍 Colores obtenidos:', colors); // Debugging

        // 🔥 Manejo de colores según la plataforma
        if (colors.platform === 'android') {
          setBackgroundColor(colors.dominant || '#FFFFFF'); // ✅ Android usa 'dominant'
        } else if (colors.platform === 'ios') {
          setBackgroundColor(colors.background || '#FFFFFF'); // ✅ iOS usa 'background'
        } else {
          setBackgroundColor(Mycolors.primary || '#FFFFFF'); // ✅ Fallback
        }
      } catch (error) {
        console.error('❌ Error al obtener colores:', error);
        setBackgroundColor('#FFFFFF'); // Fallback seguro
      }
    };

    fetchColors();
  }, []);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.text}>Color Dominante: {backgroundColor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ImageColorTest;
