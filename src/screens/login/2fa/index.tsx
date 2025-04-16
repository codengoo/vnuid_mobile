import {StaticScreenProps, useNavigation} from '@react-navigation/native';
import {AtButtonBox, AtButtonLink, Icon} from '@src/components';
import {HeaderLogin} from '@src/components/common';
import {
  LoginContentLayout,
  LoginDecoratorLayout,
  LoginLayout,
} from '@src/components/layout/login';
import {space} from '@src/constants';
import {RootStackNavigationProps} from '@src/routes';
import {useTranslation} from 'react-i18next';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

type Props = StaticScreenProps<{
  token: string;
  allowMethods: string[];
}>;

export function Login2FaScreen({route}: Props) {
  const {goBack, navigate} = useNavigation<RootStackNavigationProps>();
  const {token = '', allowMethods = []} = route.params || {};
  const {t} = useTranslation('login');

  const navigateToScreen = (screen: any) => {
    navigate(screen);
  };

  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <HeaderLogin />
        <Image
          source={require('@src/assets/images/login_2fa.png')}
          style={{height: space(350), aspectRatio: 1}}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>

      <LoginContentLayout>
        <View>
          <Text style={styles.titleSection}>
            We cannot recognize your current device, so we need one more
            challenge to verify it's you.
          </Text>
        </View>

        {allowMethods.length === 0 ? (
          <View style={styles.wrapperSection}>
            <Text style={styles.titleSection}>
              Sorry, but you can not login right now, please try other ways
            </Text>
          </View>
        ) : null}

        <View style={styles.actionWrapper}>
          {allowMethods.includes('qr') ? (
            <AtButtonBox
              title="Scan QR code"
              color="yellow"
              icon={Icon.QRIcon}
            />
          ) : null}

          {allowMethods.includes('nfc') ? (
            <AtButtonBox
              title="Scan QR code"
              color="yellow"
              icon={Icon.CardIcon}
            />
          ) : null}

          {allowMethods.includes('otp') ? (
            <AtButtonBox
              title="Enter MFA code"
              color="yellow"
              icon={Icon.AsteriskIcon}
            />
          ) : null}

          {allowMethods.includes('pass') ? (
            <AtButtonBox
              title="Enter password"
              color="yellow"
              icon={Icon.PasswordIcon}
              onPress={() => navigateToScreen('LoginPass2Fa')}
            />
          ) : null}

          {allowMethods.includes('code') ? (
            <AtButtonBox
              title="Enter in-app code"
              color="yellow"
              icon={Icon.NumberIcon}
              onPress={() => navigateToScreen('LoginCode2Fa')}
            />
          ) : null}

          {allowMethods.length === 0 ? (
            <AtButtonLink title="Go back" onPress={goBack} />
          ) : null}
        </View>
      </LoginContentLayout>
    </LoginLayout>
  );
}
