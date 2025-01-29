import {COLOR, FontFamily, FontSize} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: FontFamily.Prompt.normal.medium,
    color: COLOR.text,
    fontSize: FontSize.md,
  },
});
