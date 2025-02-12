import {Asset} from 'react-native-image-picker';
import {User} from '../../models/User';

export const UpdateWithImageUserUseCase = ({UsersRepository}) => {
  return {
    async run(id: string, user: User, file: Asset) {
      const {result, error} = await UsersRepository.updateWithImage(
        id,
        user,
        file,
      );
      return {result, error};
    },
  };
};
