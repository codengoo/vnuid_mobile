import {
  Color,
  COLOR,
  FontFamily,
  FontSize,
  fontSize,
  Space,
  space,
} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
  },

  content: {
    flex: 1,
    padding: Space.md,
    paddingTop: Space.md,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  intro: {
    display: 'flex',
    flexDirection: 'column',
    gap: Space.sm,
    padding: Space.xl,
  },

  dot: {
    backgroundColor: Color.yellow500,
    height: space(16),
    width: space(40),
    borderRadius: space(16),
  },

  stepWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Space.sm,
  },

  header: {
    backgroundColor: COLOR.backgroundBox,
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: space(60),
    overflow: 'hidden',
  },

  headerText: {
    fontSize: fontSize(40),
    fontFamily: FontFamily.Lobster.regular,
    textAlign: 'center',
    color: COLOR.text,
  },

  bodyText: {
    textAlign: 'center',
    fontSize: FontSize.md,
    fontFamily: FontFamily.Prompt.normal.medium,
    color: COLOR.textSub,
  },

  body: {},
});
