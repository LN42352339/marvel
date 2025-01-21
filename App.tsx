import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainStackNavigartor} from './src/presentation/navigation/MainStackNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainStackNavigartor />
    </NavigationContainer>
  );
}

export default App;
