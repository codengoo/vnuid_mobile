import {useTranslation} from 'react-i18next';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
export function ButtonLang() {
  const {i18n} = useTranslation();

  const handleChangeLang = () => {
    const lang = i18n.language;

    if (lang === 'en') i18n.changeLanguage('vi');
    else if (lang === 'vi') i18n.changeLanguage('en');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleChangeLang}>
      <View style={styles.flagWrapper}>
        <Image
          source={require('@src/assets/images/vi.png')}
          style={{height: '100%', aspectRatio: 2}}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}
