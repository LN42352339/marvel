import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useState, useCallback, useRef} from 'react';
import {User} from '../../../../domain/models/User';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfileInfoViewModel = ({
  LogoutUseCase,
  GetUserUseCase,
  GetUserByIdUseCase,
}) => {
  const [error, setError] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [result, setResult] = useState(false);
  const unsubscribeRef = useRef<(() => void) | null>(null); // 🔹 Para desuscribirse de Firestore

  // ✅ Obtiene los datos del usuario por su ID desde Firestore solo si está autenticado
  const getUserById = useCallback((id: string) => {
    console.log('📡 Buscando usuario en Firestore...');

    // 🔹 Verificar que el usuario sigue autenticado antes de consultar Firestore
    const currentUser = auth().currentUser;
    if (!currentUser || currentUser.uid !== id) {
      console.log(
        '⚠️ Usuario no autenticado o UID incorrecto. Evitando consulta.',
      );
      return;
    }

    // 🛑 Si ya hay una suscripción activa, la cancelamos antes de iniciar otra
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }

    unsubscribeRef.current = firestore()
      .collection('Users')
      .doc(id)
      .onSnapshot(
        doc => {
          if (!auth().currentUser) {
            console.log('⚠️ Usuario NO autenticado. Cancelando actualización.');
            return;
          }
          console.log('✅ Datos obtenidos:', doc.data());
          setUser(doc.data());
        },
        error => {
          console.error('🚨 Error Firestore:', error);
          setError(error.message);
        },
      );
  }, []);

  // ✅ Obtiene la sesión actual del usuario
  const getUserSession = useCallback(() => {
    console.log('🔍 Buscando usuario en sesión...');

    if (result) {
      console.log('🔴 Usuario cerró sesión. No se buscará usuario.');
      return;
    }

    const {result: userResult, error} = GetUserUseCase.run();

    if (error) {
      console.error('🚨 Error al obtener sesión:', error);
      setError(error);
      return;
    }

    if (!userResult) {
      console.log('🔴 No hay usuario autenticado. Deteniendo búsqueda.');
      setUser(null);
      return;
    }

    const firebaseUser = userResult as FirebaseAuthTypes.User;
    console.log('✅ Usuario obtenido:', firebaseUser);

    if (!firebaseUser?.uid) {
      console.log('🔴 UID no encontrado. No se puede buscar en Firestore.');
      return;
    }

    if (auth().currentUser) {
      getUserById(firebaseUser.uid);
    } else {
      console.log('⚠️ Usuario ya cerró sesión. Evitando consulta.');
    }
  }, [result, GetUserUseCase, getUserById]);

  // ✅ Cierra sesión del usuario y limpia el estado
  const logout = async () => {
    console.log('👋 Cerrando sesión...');

    try {
      // 🛑 Desuscribirse de Firestore antes de cerrar sesión
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }

      const {result, error} = await LogoutUseCase.run();
      if (error) {
        console.error('🚨 Error al cerrar sesión:', error);
        setError(error);
        return;
      }

      console.log('✅ Sesión cerrada correctamente.');
      setUser(null);
      setResult(result);

      // 🔹 Verificar que `auth().currentUser` es `null`
      setTimeout(() => {
        console.log('🔍 Verificando estado después del logout...');
        console.log('auth().currentUser:', auth().currentUser); // Debe ser `null`
      }, 500);
    } catch (err) {
      console.error('🚨 Error inesperado en logout:', err);
      setError('Ocurrió un error al cerrar sesión.');
    }
  };

  return {
    result,
    error,
    user,
    logout,
    getUserSession,
    setError,
  };
};

export default ProfileInfoViewModel;
