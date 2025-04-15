import {COLOR, FontFamily, fontSize, space} from '@src/constants';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CheckIcon} from '../icon';
import { Dispatch, SetStateAction } from 'react';

interface CustomCheckboxProps {
  label?: string;
  checked: boolean;
  setValue: Dispatch<SetStateAction<boolean>>
  disabled?: boolean;
}

export function AtCheckbox({
  label,
  checked,
  setValue,
  disabled,
}: CustomCheckboxProps) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && setValue(!checked)}
      style={styles.container}
      activeOpacity={disabled ? 1 : 0.7}>
      
      <View
        style={[
          styles.checkbox,
          checked && styles.checked,
          disabled && styles.disabledCheckbox,
        ]}>
        {checked && <CheckIcon stroke={2.5} size={space(16)} />}
      </View>

      {label && (
        <Text style={[styles.label, disabled && styles.disabledLabel]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space(16),
  },
  checkbox: {
    width: space(28),
    height: space(28),
    borderRadius: space(8),
    borderWidth: space(2),
    borderColor: COLOR.borderInput,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.background,
  },

  checked: {
    backgroundColor: COLOR.backgroundButtonHighlight,
    borderColor: COLOR.borderInput,
  },

  disabledCheckbox: {
    backgroundColor: '#e0e0e0',
    borderColor: '#ccc',
  },

  label: {
    fontSize: fontSize(16),
    color: COLOR.text,
    flexShrink: 1,
    fontFamily: FontFamily.Prompt.normal.semiBold,
  },

  disabledLabel: {
    color: '#aaa',
  },
});
