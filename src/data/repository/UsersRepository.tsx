import {Asset} from 'react-native-image-picker';
import {User} from '../../domain/models/User';

export const UsersRepository = ({UsersDataSource}) => {
  return {
    getUserById(id: string, callback) {
      UsersDataSource.getUserById(id, ({result, error}) => {
        callback({result, error});
      });
    },
    async getUserByIdOnce(id: string) {
      const {result, error} = await UsersDataSource.getUserByIdOnce(id);
      return {result, error};
    },
    async update(id: string, user: User) {
      const {result, error} = await UsersDataSource.update(id, user);
      return {result, error};
    },
    async updateWithImage(id: string, user: User, file: Asset) {
      const {result, error} = await UsersDataSource.updateWithImage(
        id,
        user,
        file,
      );
      return {result, error};
    },
  };
};
