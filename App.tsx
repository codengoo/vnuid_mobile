import { Toast } from '@src/components/ui';
import {Navigation} from '@src/routes';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigation />
      <Toast />
    </SafeAreaProvider>
  );
}

export default App;
