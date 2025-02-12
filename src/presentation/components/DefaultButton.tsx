import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {Mycolors} from '../theme/AppTheme';

interface Props {
  text: String;
  onPress: () => void;
  image?: any;
  color?: string;
}

export const DefaultButton = ({
  text,
  onPress,
  image = require('../../../assets/img/escudo.png'),
  color = Mycolors.primary,
}: Props) => {
  return (
    <TouchableOpacity
      style={{...styles.button, backgroundColor: color}}
      onPress={() => onPress()}>
      <View></View>
      <Text style={styles.buttonText}>{text}</Text>
      <Image source={image} style={styles.buttonIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    // backgroundColor: color,
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8,
    flexDirection: 'row',
  },
  buttonIcon: {
    height: 40,
    width: 40,
    marginLeft: -140,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'auto',
    width: '100%',
    marginLeft: 60,
  },
});
