import {COLOR, FontFamily, fontSize, Space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLOR.backgroundButton,
    borderRadius: Space.md,
  },

  content: {
    padding: Space.sd,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontFamily: FontFamily.Prompt.normal.semiBold,
    color: COLOR.textButton,
    fontSize: fontSize(18),
  },
});
