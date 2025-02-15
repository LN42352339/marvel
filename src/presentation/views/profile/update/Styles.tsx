import {StyleSheet} from 'react-native';
import {Mycolors} from '../../../theme/AppTheme';

const ProfileUpdateStyles = StyleSheet.create({
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
  profileImageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 177,
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  arrow_back_container: {
    position: 'absolute',
    top: 5,
    left: 15,
  },

  arrow_back: {
    height: 30,
    width: 30,
  },
});

export default ProfileUpdateStyles;
