import {COLOR} from '@src/constants';
import {ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ChevronRightIcon} from '../../icon';
import {IIconProp} from '../../icon/type';
import {styles} from './styles';

interface AtButtonBoxProps {
  icon: (props: IIconProp) => ReactNode;
  title: string;
  expandable?: boolean;
}
export function AtButtonBox({icon: Icon, title, expandable}: AtButtonBoxProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.titleWrapper}>
        <Icon color={COLOR.text} stroke={2}/>
        <Text style={styles.title}>{title}</Text>
      </View>
      {expandable && <ChevronRightIcon color={COLOR.text} stroke={2} />}
    </TouchableOpacity>
  );
}
