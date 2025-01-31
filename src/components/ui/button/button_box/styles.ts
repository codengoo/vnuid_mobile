import {Color, COLOR, FontFamily, FontSize, space, Space} from '@src/constants';
import {StyleSheet} from 'react-native';

export interface IAtButtonStyle {
  color?: 'default' | 'yellow' | 'green';
}

export const style = ({color = 'default'}: IAtButtonStyle) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        color === 'default'
          ? COLOR.backgroundButton
          : color === 'green'
            ? Color.green300
            : COLOR.backgroundButtonHighlight,
      borderRadius: Space.sd,
      borderColor: COLOR.borderButton,
      borderWidth: space(2),
      padding: Space.sd,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      width: '100%',
    },

    titleWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: Space.md,
    },

    title: {
      fontFamily: FontFamily.Prompt.normal.semiBold,
      color:
        color === 'default'
          ? COLOR.text
          : color === 'green'
            ? COLOR.textButton
            : COLOR.text,
      fontSize: FontSize.md,
    },

    center: {
      textAlign: 'center',
      justifyContent: 'center',
    },
  });
