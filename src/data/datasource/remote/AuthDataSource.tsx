// SERVICIO - INFORMACION
import auth from '@react-native-firebase/auth';
import {User} from '../../../domain/models/User';
import firestore from '@react-native-firebase/firestore';

export const getUser = () => {
  try {
    const data = auth().currentUser;
    return {result: data, error: null};
  } catch (error: any) {
    console.log('Error: ', error);
    return {result: null, error: error.message};
  }
};

export const login = async (email: string, password: string) => {
  try {
    const data = await auth().signInWithEmailAndPassword(email, password);
    return Promise.resolve({result: data, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const register = async (user: User) => {
  try {
    const data = await auth().createUserWithEmailAndPassword(
      user.email,
      user.password,
    );
    const id = getUser().result?.uid; // Uid
    await firestore().collection('Users').doc(id).set({
      email: user.email,
      username: user.username,
    });

    await firestore()
      .collection('Users')
      .doc(id)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
      });
    return Promise.resolve({result: data, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
    return Promise.resolve({result: true, error: null});
  } catch (error: any) {
    console.log('Error: ', error);
    return Promise.resolve({result: null, error: error.message});
  }
};
