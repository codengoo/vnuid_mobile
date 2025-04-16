import {Text, View} from 'react-native';
import {styles} from './styles';

interface IProps {
  description: string;
  children?: React.ReactNode[];
}
export function LoginForm({children, description}: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleSection}>{description}</Text>
      {children}
    </View>
  );
}
