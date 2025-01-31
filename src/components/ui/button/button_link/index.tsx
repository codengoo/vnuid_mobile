import {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface AtButtonLinkProps {
  title: string;
  onPress?: () => void;
}

export function AtButtonLink({title, onPress}: AtButtonLinkProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
