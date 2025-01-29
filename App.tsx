import {Navigation} from '@src/routes';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
