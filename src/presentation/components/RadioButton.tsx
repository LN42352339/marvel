import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {Mycolors} from '../theme/AppTheme';

export const RadioButton = ({onPress, selected, children, image}) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
      <Image source={image} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
    marginLeft: 55,
    marginTop: 10,
    top: 8,
  },
  radioButton: {
    height: 15,
    width: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: Mycolors.primary,
  },
  radioButtonText: {
    width: 120,
    fontSize: 10,
    marginLeft: 20,
    color: 'white',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
