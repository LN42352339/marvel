import {useState} from 'react';
import {User} from '../../../../domain/models/User';
const PostDetailViewModel = ({GetUserByIdOnceUseCase}) => {
  const [user, setUser] = useState<User>();

  const getUserById = async (id: string) => {
    const {result, error} = await GetUserByIdOnceUseCase.run(id);
    setUser(result);
  };

  return {
    user,
    getUserById,
  };
};

export default PostDetailViewModel;
