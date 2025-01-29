import Onboarding from '@src/screens/onboarding';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Onboarding />
    </SafeAreaProvider>
  );
}

export default App;
