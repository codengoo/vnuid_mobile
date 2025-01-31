import {COLOR, FontFamily, FontSize, space, Space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
    padding: Space.sl,
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  qrCodeWrapper: {
    backgroundColor: COLOR.backgroundBoxHighlight,
    padding: Space.sd,
    borderRadius: space(20),
  },

  helperWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: Space.md,
  },

  helperTitle: {
    fontFamily: FontFamily.Prompt.normal.medium,
    color: COLOR.text,
    textAlign: 'center',
    fontSize: FontSize.md,
  },

  helperDetails: {
    fontFamily: FontFamily.Prompt.normal.medium,
    color: COLOR.textSub,
    textAlign: 'center',
    fontSize: FontSize.sm,
  },
});
