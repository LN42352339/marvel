import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Mycolors} from '../theme/AppTheme';

interface Props {
  placeholder: string;
  image: any;
  value: string;
  prop: string;
  onChangeText: (prop: string, values: any) => void;
}

export const DefaultTextInput = ({
  placeholder,
  image,
  value,
  prop,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={Mycolors.placeholder}
        placeholder={placeholder}
        value={value}
        onChangeText={text => onChangeText(prop, text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 25,
    width: 25,
    marginTop: 19,
    marginLeft: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Mycolors.placeholder,
    paddingVertical: 0,
    fontSize: 12,
    margin: 15,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 6,
    color: Mycolors.secondary,
    flex: 1,
  },
});
