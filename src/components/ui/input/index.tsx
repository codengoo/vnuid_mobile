import {Icon as IconUI} from '@src/components/ui';
import {Color} from '@src/constants';
import {Dispatch, SetStateAction, useState} from 'react';
import {
  StyleProp,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {IIcon} from '../icon';
import {styles} from './styles';

interface AtInputProps {
  icon?: IIcon;
  placeholder?: string;
  onEnter?: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  mode: 'text' | 'password' | 'numeric';
  style?: StyleProp<ViewStyle>;
  endComponent?: React.ReactNode;
}

export function AtInput({
  icon: Icon,
  placeholder,
  onEnter,
  value,
  setValue,
  mode = 'text',
  style,
  endComponent
}: AtInputProps) {
  const [isHideText, setHideText] = useState(true);
  const handleToggle = () => setHideText(prev => !prev);
  return (
    <View style={[styles.container, style]}>
      {Icon && <Icon stroke={2} />}
      <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        secureTextEntry={isHideText}
        onSubmitEditing={onEnter}
        returnKeyType="done"
        value={value}
        onChange={e => setValue(e.nativeEvent.text)}
        keyboardType={mode == 'numeric' ? 'numeric' : 'default'}
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

      {endComponent}
    </View>
  );
}
