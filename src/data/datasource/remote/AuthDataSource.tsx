import auth from '@react-native-firebase/auth';
import {User} from '../../../domain/models/User';
import firestore from '@react-native-firebase/firestore';

export const getUser = () => {
  try {
    const user = auth().currentUser;
    if (!user) {
      console.error('🔴 No hay usuario autenticado.');
      return {result: null, error: 'No hay usuario autenticado.'};
    }
    return {result: user, error: null};
  } catch (error: any) {
    console.error('🚨 Error en getUser:', error);
    return {result: null, error: error.message};
  }
};

export const login = async (email: string, password: string) => {
  try {
    const data = await auth().signInWithEmailAndPassword(email, password);
    return {result: data, error: null};
  } catch (error: any) {
    console.error('🚨 Error en login:', error);
    return {result: null, error: error.message};
  }
};

export const register = async (user: User) => {
  try {
    const data = await auth().createUserWithEmailAndPassword(
      user.email,
      user.password,
    );
    const id = data.user.uid; // 🔹 Usamos el UID retornado por Firebase directamente.

    await firestore().collection('Users').doc(id).set({
      email: user.email,
      username: user.username,
    });

    console.log('✅ Usuario registrado correctamente en Firestore.');
    return {result: data, error: null};
  } catch (error: any) {
    console.error('🚨 Error en register:', error);
    return {result: null, error: error.message};
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
    console.log('✅ Sesión cerrada correctamente.');

    return {result: true, error: null};
  } catch (error: any) {
    console.error('🚨 Error cerrando sesión:', error);
    return {result: null, error: error.message};
  }
};
