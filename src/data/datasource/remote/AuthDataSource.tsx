// SERVICIO-INFORMACION

import auth from '@react-native-firebase/auth';
import {User} from '../../../domain/models/User';
import firetore from '@react-native-firebase/firestore';

// ✅ Obtiene el usuario actual sin necesidad de try/catch
export const getUser = () => {
  const user = auth().currentUser;
  if (!user) {
    return {result: null, error: 'No hay usuario autenticado'};
  }
  return {result: user, error: null};
};

// ✅ Inicia sesión en Firebase
export const login = async (email: string, password: string) => {
  try {
    const data = await auth().signInWithEmailAndPassword(email, password);
    return {result: data, error: null};
  } catch (error: any) {
    console.log('Error en login:', error);
    return {result: null, error: error.message};
  }
};

// ✅ Registra un nuevo usuario en Firebase
export const register = async (user: User) => {
  try {
    const data = await auth().createUserWithEmailAndPassword(
      user.email,
      user.password,
    );
    const id = getUser().result?.uid;
    firetore()
      .collection('Users')
      .doc(id)
      .set({email: user.email, username: user.username});

    return {result: data, error: null};
  } catch (error: any) {
    console.log('Error en registro:', error);
    return {result: null, error: error.message};
  }
};

// ✅ Cierra sesión en Firebase
export const logout = async () => {
  try {
    await auth().signOut();
    return {result: true, error: null};
  } catch (error: any) {
    console.log('Error en logout:', error);
    return {result: null, error: error.message};
  }
};
