import {StyleSheet} from 'react-native';
import {Mycolors} from '../../../theme/AppTheme';

const PostDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Mycolors.background,
  },
  postImage: {
    width: '100%',
    height: '35%',
  },
  userContainer: {
    flexDirection: 'row',
    backgroundColor: '#2b2d37',
    borderRadius: 10,
    margin: 20,
    padding: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  username: {
    color: 'white',
    fontSize: 17,
  },
  email: {
    color: 'white',
  },
  userInfo: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  postName: {
    color: Mycolors.primary,
    fontSize: 19,
    marginLeft: 20,
  },
  categoryContainer: {
    backgroundColor: '#2b2d37',
    // width: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 15,
  },
  categoryImage: {
    width: 30,
    height: 30,
  },
  categoryName: {
    color: 'white',
    marginLeft: 7,
  },
  divider: {
    width: '90%',
    height: 2,
    backgroundColor: '#2b2d37',
    marginTop: 15,
    alignSelf: 'center',
  },
  descriptionTitle: {
    color: 'white',
    fontSize: 19,
    marginLeft: 20,
    marginTop: 15,
  },
  description: {
    color: 'white',
    marginLeft: 20,
    marginTop: 10,
  },
  arrow_back_container: {
    position: 'absolute',
    top: 7,
    left: 15,
  },
  arrow_back: {
    width: 30,
    height: 30,
  },
});

export default PostDetailStyles;
