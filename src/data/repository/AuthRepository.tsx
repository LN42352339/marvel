import {User} from '../../domain/models/User';

export const AuthRepository = ({AuthDataSource}) => {
  return {
    getUser() {
      return AuthDataSource.getUser(); // ✅ Retorna el objeto sin desestructurar
    },

    async login(email: string, password: string) {
      const {result, error} = await AuthDataSource.login(email, password);
      return {result, error};
    },
    async register(user: User) {
      const {result, error} = await AuthDataSource.register(user);
      return {result, error};
    },

    async logout() {
      const {result, error} = await AuthDataSource.logout();
      return {result, error};
    },
  };
};
