import {Icon as IconUI} from '@src/components/ui';
import {Color} from '@src/constants';
import {Dispatch, SetStateAction, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {IIcon} from '../icon';
import {styles} from './styles';

interface AtInputProps {
  icon?: IIcon;
  placeholder?: string;
  isHideContent?: boolean;
  onEnter?: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  mode: 'text' | 'password';
}

export function AtInput({
  icon: Icon,
  placeholder,
  isHideContent,
  onEnter,
  value,
  setValue,
  mode = 'text',
}: AtInputProps) {
  const [isHideText, setHideText] = useState(isHideContent);
  const handleToggle = () => setHideText(prev => !prev);
  return (
    <View style={styles.container}>
      {Icon && <Icon stroke={2} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isHideText}
        onSubmitEditing={onEnter}
        returnKeyType="done"
        value={value}
        onChange={e => setValue(e.nativeEvent.text)}
      />

      {mode === 'password' ? (
        <TouchableOpacity onPress={handleToggle}>
          {isHideText ? (
            <IconUI.EyeCloseIcon stroke={2} color={Color.black700} />
          ) : (
            <IconUI.EyeOpenIcon stroke={2} color={Color.black700} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
