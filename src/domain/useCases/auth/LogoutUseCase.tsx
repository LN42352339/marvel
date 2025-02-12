import auth from '@react-native-firebase/auth';

export const LogoutUseCase = ({AuthRepository}) => {
  return {
    async run() {
      const {result, error} = await AuthRepository.logout();

      console.log(
        '🔍 Verificando estado del usuario después de cerrar sesión...',
      );
      console.log('auth().currentUser:', auth().currentUser); // 🔍 Debería ser null

      return {result, error};
    },
  };
};
