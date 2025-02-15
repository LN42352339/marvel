import {User} from '../../models/User';

export const GetUserByIdOnceUseCase = ({UsersRepository}) => {
  return {
    async run(id: string) {
      const {result, error} = await UsersRepository.getUserByIdOnce(id);
      return {result, error};
    },
  };
};
