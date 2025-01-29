import {Pressable, Text} from 'react-native';

interface AtButtonLinkProps {
  title: string;
}

export function AtButtonLink({title}: AtButtonLinkProps) {
  return (
    <Pressable>
      <Text>{title}</Text>
    </Pressable>
  );
}
