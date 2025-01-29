import {COLOR, FontFamily, FontSize, Space, space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  content: {
    backgroundColor: COLOR.backgroundBox,
    borderRadius: space(40),
    display: 'flex',
    padding: space(40),
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1
  },

  mainOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: Space.lg,
    alignItems: 'center',
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
