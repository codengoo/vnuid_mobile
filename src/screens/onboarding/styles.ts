import {Colors} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    flex: 1,
  },

  content: {
    padding: 4,
  },

  header: {
    backgroundColor: Colors.secondary,
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 60,
    overflow: 'hidden',
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  bodyText: {
    textAlign: 'center',
  },

  body: {},
});
