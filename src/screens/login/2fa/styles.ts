import {COLOR, FontFamily, FontSize, space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  actionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: space(8),
  },

  titleSection: {
    color: COLOR.text,
    fontSize: FontSize.md,
    fontFamily: FontFamily.Prompt.normal.medium,
    textAlign: 'center',
  },

  wrapperSection: {
    backgroundColor: COLOR.backgroundBoxHighlight,
    padding: space(16),
    borderRadius: space(12),
    borderWidth: space(2),
    borderColor: COLOR.borderButton,
    borderStyle: 'dashed',
    width: '100%',
  },
});
