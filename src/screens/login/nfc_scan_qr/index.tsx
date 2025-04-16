import {useNavigation} from '@react-navigation/native';
import {Color, space} from '@src/constants';
import {signInWithNfc} from '@src/helpers/login';
import {RootStackNavigationProps} from '@src/routes';
import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import { styles } from './styles';

export function ScanNfcQrScreen() {
  const {t} = useTranslation('login');
  const {goBack} = useNavigation<RootStackNavigationProps>();
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const hasScannedRef = useRef(false);

  const handleSignin = async (nfc: string, uid: string) => {
    try {
      await signInWithNfc(nfc, uid);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('toast_failed'),
        text2: t('toast_failed_description'),
        autoHide: true,
      });
      goBack();
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: async codes => {
      if (codes.length > 0 && !hasScannedRef.current) {
        const raw = codes[0].value;
        if (!raw) return;
        try {
          const data = JSON.parse(raw);
          hasScannedRef.current = true;
          console.log(data);
          await handleSignin(data.nfc, data.uid);
        } catch (error) {
          hasScannedRef.current = false;
        }
      }
    },
  });

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!device)
    return (
      <View>
        <Text>No device</Text>
      </View>
    );

  return (
    <View style={{flex: 1}}>
      <Camera
        device={device}
        codeScanner={codeScanner}
        isActive
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.overlay}>
        <View style={styles.squareFrame} />

        <Text style={styles.instructionText}>Align QR code in the box</Text>
      </View>
    </View>
  );
}
