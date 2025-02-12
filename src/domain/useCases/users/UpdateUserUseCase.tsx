import {User} from '../../models/User';
import auth from '@react-native-firebase/auth';

export const UpdateUserUseCase = ({UsersRepository}) => ({
  run: async (id: string, user: User) => {
    try {
      console.log('🚀 Ejecutando UpdateUserUseCase...');
      console.log('📌 ID del usuario:', id);
      console.log('📌 Datos a actualizar:', JSON.stringify(user, null, 2));

      // 🔍 Obtener el usuario autenticado en Firebase
      const currentUser = auth().currentUser;

      if (!currentUser) {
        console.error('🚨 Error: No hay usuario autenticado.');
        return {result: null, error: 'No hay usuario autenticado.'};
      }

      if (currentUser.uid !== id) {
        console.error('🚨 Error: Intento de actualización no autorizado.');
        return {
          result: null,
          error: 'No tienes permisos para modificar este usuario.',
        };
      }

      // ✅ Verificar que UsersRepository está definido correctamente
      if (!UsersRepository || !UsersRepository.update) {
        console.error(
          "❌ UsersRepository no está definido o no tiene el método 'update'.",
        );
        return {
          result: null,
          error: 'UsersRepository no está definido correctamente.',
        };
      }

      // 🔄 Actualizar el usuario en Firestore
      const {result, error} = await UsersRepository.update(id, user);

      if (error) {
        console.error('🚨 Error al actualizar usuario en Firestore:', error);
        return {result: null, error};
      }

      console.log('✅ Usuario actualizado correctamente en Firestore:', result);
      return {result, error};
    } catch (err: unknown) {
      console.error('🔥 Error inesperado en UpdateUserUseCase:', err);
      return {
        result: null,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  },
});
