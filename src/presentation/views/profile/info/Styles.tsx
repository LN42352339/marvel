import {StyleSheet} from 'react-native';
import {Mycolors} from '../../../theme/AppTheme';

const ProfileInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Mycolors.background,
  },
  backgroundImage: {
    width: '100%',
    height: 220,
  },

  darkness: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: 220,
  },

  title: {
    width: '50%',
    color: 'white',
    fontSize: 16,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 74,
  },

  profileImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 177,
    borderRadius: 100,
  },
  usernameText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: 115,
    width: '50%',
  },

  emailText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    width: '50%',
  },
});

export default ProfileInfoStyles;
