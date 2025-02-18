import React from 'react';
import {LogBox} from 'react-native'; // ✅ Permite ignorar ciertos warnings en desarrollo
import {NavigationContainer} from '@react-navigation/native'; // 📌 Contenedor principal para la navegación
import {MainStackNavigator} from './src/presentation/navigation/MainStackNavigator'; // 📌 Importa el stack de navegación principal

// ⚠️ Ignorar advertencias específicas de Firebase
LogBox.ignoreLogs([
  'This method is deprecated', // Ignorar advertencias de métodos obsoletos
  'React Native Firebase namespaced API', // Ignorar advertencias sobre la API de Firebase
  'Please use `getApp()` instead', // Ignorar sugerencias de uso de `getApp()`
]);

// 📌 Función principal de la aplicación
function App(): JSX.Element {
  return (
    // 🌐 Contenedor de navegación (requerido para usar react-navigation)
    <NavigationContainer>
      {/* 📌 Carga la navegación principal desde el stack */}
      <MainStackNavigator />
    </NavigationContainer>
  );
}

// 📌 Exportamos la aplicación para que sea utilizada por el sistema
export default App;
