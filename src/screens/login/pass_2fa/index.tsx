import {StaticScreenProps} from '@react-navigation/native';
import {AtInput, Icon} from '@src/components';
import {HeaderLogin} from '@src/components/common';
import {
  LoginContentLayout,
  LoginDecoratorLayout,
  LoginLayout,
} from '@src/components/layout';
import {space} from '@src/constants';
import {Image} from 'react-native';

type Props = StaticScreenProps<{
  token: string;
}>;

export function LoginPass2FaScreen({route}: Props) {
  const {token = ''} = route.params || {};
  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <HeaderLogin />
        <Image
          source={require('@src/assets/images/login_pass.png')}
          style={{height: space(350), aspectRatio: 1}}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>
      <LoginContentLayout>
        <AtInput icon={Icon.PasswordIcon} placeholder="***" isHideContent />
      </LoginContentLayout>
    </LoginLayout>
  );
}
