import React from 'react';
import {LogBox} from 'react-native'; // ✅ Importar LogBox para ignorar warnings
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/presentation/navigation/MainStackNavigator';

// ⚠️ Ignorar los warnings de Firebase
LogBox.ignoreLogs([
  'This method is deprecated',
  'React Native Firebase namespaced API',
  'Please use `getApp()` instead',
]);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
