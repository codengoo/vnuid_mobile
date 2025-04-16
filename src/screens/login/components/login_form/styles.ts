import {COLOR, FontFamily, FontSize, space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  titleSection: {
    color: COLOR.text,
    fontSize: FontSize.md,
    fontFamily: FontFamily.Prompt.normal.medium,
    textAlign: 'center',
  },

  container: {
    width: '100%',
    flexDirection: 'column',
    gap: space(8),
    alignItems: 'center',
  },
});
