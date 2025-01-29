import {COLOR, FontFamily, FontSize, space, Space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.backgroundButton,
    borderRadius: Space.sd,
    borderColor: COLOR.borderButton,
    borderWidth: space(2),
    padding: Space.sd,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: "100%",
  },

  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Space.md,
  },

  title: {
    fontFamily: FontFamily.Prompt.normal.medium,
    color: COLOR.text,
    fontSize: FontSize.md,
  },
});
