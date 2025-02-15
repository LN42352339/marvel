import {StyleSheet} from 'react-native';
import {Mycolors} from '../../../theme/AppTheme';

const MyPostListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Mycolors.background,
  },
  fabContainer: {
    width: 55,
    height: 55,
    backgroundColor: Mycolors.primary,
    position: 'absolute',
    bottom: 25,
    right: 25,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fab: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});

export default MyPostListStyles;
