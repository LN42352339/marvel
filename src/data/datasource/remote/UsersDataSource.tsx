import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {User} from '../../../domain/models/User';
import {Asset} from 'react-native-image-picker';

export const getUserById = (id: string, callback) => {
  firestore()
    .collection('Users')
    .doc(id)
    .onSnapshot(
      snapshot => {
        const user = snapshot.data() as User;
        callback({result: user, error: null});
      },
      error => {
        console.log('Error firestore ', error);
        callback({result: null, error: `Error: ${error}`});
      },
    );
};

export const getUserByIdOnce = async (id: string) => {
  try {
    const user = (
      await firestore().collection('Users').doc(id).get()
    ).data() as User;
    return Promise.resolve({result: user, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const update = async (id: string, user: User) => {
  try {
    await firestore().collection('Users').doc(id).update({
      username: user.username,
    });
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const updateWithImage = async (id: string, user: User, file: Asset) => {
  try {
    const reference = storage().ref(`/Users/${file.fileName}`);
    console.log('File name: ', file.fileName);

    const task = await reference.putFile(file.uri!, {
      contentType: 'image/png',
    });
    const url = await reference.getDownloadURL();
    await firestore().collection('Users').doc(id).update({
      image: url,
      username: user.username,
    });
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};
