import {COLOR, FontFamily, FontSize, Space, space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: space(2),
    backgroundColor: COLOR.backgroundInput,
    borderColor: COLOR.borderInput,
    padding: Space.sd,
    paddingVertical: Space.sm,
    width: '100%',
    borderRadius: Space.sd,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Space.md
  },

  input: {
    flexGrow: 1,
    fontFamily: FontFamily.Prompt.normal.semiBold,
    fontSize: FontSize.md
  }
});
