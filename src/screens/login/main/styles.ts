import {COLOR, FontFamily, FontSize, Space, space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  langWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: Space.sd,
  },

  container: {
    backgroundColor: COLOR.background,
    flex: 1,
    position: 'relative',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },

  content: {
    backgroundColor: COLOR.backgroundBox,
    borderRadius: space(40),
    display: 'flex',
    padding: space(40),
    flexDirection: 'column',
    justifyContent: 'space-between',

    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  mainOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: Space.lg,
    alignItems: 'center',
    marginBottom: space(20)
  },

  tryText: {
    color: COLOR.text,
    fontSize: FontSize.md,
    fontFamily: FontFamily.Prompt.normal.medium,
  },

  helperText: {
    color: COLOR.text,
    fontSize: FontSize.sm,
    fontFamily: FontFamily.Prompt.normal.medium,
    textAlign: 'center',
  },
});
