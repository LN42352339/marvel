import {StyleSheet} from 'react-native';
import {Mycolors} from '../../../theme/AppTheme';

const PostCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Mycolors.background,
  },
  backgroundImage: {
    height: '35%',
    width: '100%',
    backgroundColor: Mycolors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectImage: {
    width: 130,
    height: 130,
    marginTop: 15,
    alignSelf: 'center',
  },
  textImage: {
    fontSize: 20,
    left: 40,
  },
  textCategory: {
    color: 'white',
    fontSize: 15,
    marginLeft: 45,
    marginTop: 9,
  },
  arrow_back_container: {
    position: 'absolute',
    top: 5,
    left: 15,
  },
  arrow_back: {
    width: 30,
    height: 30,
  },
  fileImage: {
    width: '100%',
    height: '100%',
  },
});

export default PostCreateStyles;
