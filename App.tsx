import {Toast} from '@src/components/ui';
import {Navigation, navigationRef} from '@src/routes';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigation ref={navigationRef} />
      <Toast />
    </SafeAreaProvider>
  );
}

export default App;
