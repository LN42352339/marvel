import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

interface Props {
  text: String;
  onPress: () => void;
  image?: any;
}

export const DefaultButton = ({
  text,
  onPress,
  image = require('../../../assets/img/escudo.png'),
}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <View></View>
      <Text style={styles.buttonText}>{text}</Text>
      <Image source={image} style={styles.buttonIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: '#3B4480',
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
<<<<<<< HEAD
    textAlign: 'left',
=======
    textAlign: 'auto',
>>>>>>> origin/dev
    width: '100%',
    marginLeft: 60,
  },
});
