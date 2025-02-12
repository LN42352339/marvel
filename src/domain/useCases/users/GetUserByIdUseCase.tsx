import auth from '@react-native-firebase/auth';

export const GetUserByIdUseCase = ({UsersRepository}) => ({
  run: async (id: string, callback) => {
    console.log('📡 Ejecutando GetUserByIdUseCase...');

    // 🚨 Si el usuario ya cerró sesión, evita la consulta
    if (!auth().currentUser) {
      console.log(
        '⚠️ Usuario NO autenticado. Cancelando consulta a Firestore.',
      );
      callback({result: null, error: 'Usuario no autenticado'});
      return;
    }

    UsersRepository.getUserById(id, callback);
  },
});
