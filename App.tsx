import React from 'react';
import {Text, View, Image, StyleSheet, StatusBar} from 'react-native';

import Svg, {Path} from 'react-native-svg';
import {Mycolors} from './src/presentation/theme/AppTheme';
import {DefaultButton} from './src/presentation/components/DefaultButton';
import {DefaultTextInput} from './src/presentation/components/DefaultTextInput';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* Barra de estado con fondo azul */}
      <StatusBar backgroundColor={Mycolors.primary} barStyle="light-content" />

      {/* Fondo azul y SVG */}
      <View style={styles.headerBackground}>
        <Svg viewBox="0 0 1440 320" style={styles.svg}>
          <Path
            fill={Mycolors.primary}
            fillOpacity="1"
            d="M0,288L34.3,272C68.6,256,137,224,206,224C274.3,224,343,256,411,266.7C480,277,549,267,617,224C685.7,181,754,107,823,85.3C891.4,64,960,96,1029,144C1097.1,192,1166,256,1234,261.3C1302.9,267,1371,213,1406,186.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          />
        </Svg>
      </View>

      {/* Contenido */}
      <View style={styles.content}>
        <Image
          source={require('./assets/img/marvel8.png')}
          style={styles.image}
        />
        <Image
          source={require('./assets/img/teladearana.png')}
          style={styles.image3}
        />
        <Image
          source={require('./assets/img/marvellogin.png')}
          style={styles.image2}
        />
        <DefaultTextInput
          placeholder="Correo Electrónico"
          image={require('./assets/img/email.png')}
        />

        <DefaultTextInput
          placeholder="Contraseña"
          image={require('./assets/img/password.png')}
        />

        <DefaultButton
          text="Inicia sesión"
          onPress={() => {}}
          // image={require('./assets/img/add.png')}
        />

        <Text style={styles.textRegister}>REGISTRATE AHORA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: 350,
    marginBottom: 270,
    padding: 70,
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
    fontSize: 9,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 60,
    color: Mycolors.secondary,
  },
});

export default App;
