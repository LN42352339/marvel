import {StyleSheet} from 'react-native';
import {Mycolors} from '../../../theme/AppTheme';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Mycolors.background,
  },
  headerBackground: {
    backgroundColor: Mycolors.primary, //logo marvel
    width: '100%',
    height: 200, // Ajusta la altura según sea necesario
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  svg: {
    padding: 250,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  image: {
    height: 50,
    width: 370,
    marginBottom: 250,
    padding: 80,
  },

  image2: {
    position: 'absolute',
    top: 50,
    height: 220,
    width: 125,
    zIndex: 10, // Asegura que esté encima de otros elementos
  },
  image3: {
    position: 'absolute',
    top: 50,
    height: 350,
    width: 500,
    zIndex: 10, // Asegura que esté encima de otros elementos
  },

  textRegister: {
    width: '100%',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 60,
    color: Mycolors.secondary,
  },
});

export default LoginStyles;
