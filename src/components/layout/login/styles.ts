import {COLOR, space, Space} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    paddingHorizontal: Space.xl,
  },

  content: {
    backgroundColor: COLOR.backgroundBox,
    borderRadius: space(40),
    display: 'flex',
    padding: space(40),
    gap: Space.xl,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
});
