import {User} from '../../domain/models/User';
import * as AuthDataSource from '../datasource/remote/AuthDataSource';

export const AuthRepository = () => {
  return {
    getUser() {
      return AuthDataSource.getUser();
    },

    async login(email: string, password: string) {
      return await AuthDataSource.login(email, password);
    },

    async register(user: User) {
      return await AuthDataSource.register(user);
    },

    async logout() {
      return await AuthDataSource.logout();
    },
  };
};
