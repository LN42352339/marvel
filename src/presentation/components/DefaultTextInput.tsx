<<<<<<< HEAD
import React, { Key } from 'react';
=======
import React, {Key} from 'react';
>>>>>>> origin/dev
import {Image, KeyboardType, StyleSheet, TextInput, View} from 'react-native';
import {Mycolors} from '../theme/AppTheme';

interface Props {
  placeholder: string;
  image: any;
  value: string;
  prop: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  onChangeText: (prop: string, values: any) => void;
}

export const DefaultTextInput = ({
  placeholder,
  image,
  value,
  prop,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
<<<<<<< HEAD

=======
>>>>>>> origin/dev
}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <TextInput
        style={styles.textInput}
<<<<<<< HEAD
        placeholderTextColor={Mycolors.placeholder}
=======
        placeholderTextColor={Mycolors.secondary}
>>>>>>> origin/dev
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
<<<<<<< HEAD
        autoCapitalize='none'
=======
        autoCapitalize="none"
>>>>>>> origin/dev
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
<<<<<<< HEAD
    backgroundColor: Mycolors.primary,
    
    
=======
>>>>>>> origin/dev
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
<<<<<<< HEAD
    color: Mycolors.primary,
    flex: 1,
    
    
=======
    color: Mycolors.secondary,
    flex: 1,
>>>>>>> origin/dev
  },
});
