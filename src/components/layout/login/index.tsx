import {ReactNode} from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const LoginLayout = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar hidden />
      {children}
    </SafeAreaView>
  );
};

export const LoginDecoratorLayout = ({children}: {children: ReactNode}) => {
  return <View style={styles.header}>{children}</View>;
};

export const LoginContentLayout = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView style={styles.content} edges={['bottom']}>
      {children}
    </SafeAreaView>
  );
};
