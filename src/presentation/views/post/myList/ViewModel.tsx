import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useState} from 'react';
import {Post} from '../../../../domain/models/Post';

const MyPostListViewModel = ({
  GetPostsByIdUseCase,
  GetUserUseCase,
  RemovePostUseCase,
}) => {
  const [response, setResponse] = useState<Post[]>();
  const [error, setError] = useState('');

  const getUserSession = () => {
    const {result, error} = GetUserUseCase.run();
    const myUser = result as FirebaseAuthTypes.User;
    getPostsById(myUser.uid);
  };

  const removePost = async (idPost: string) => {
    await RemovePostUseCase.run(idPost);
  };

  const getPostsById = (idUser: string) => {
    GetPostsByIdUseCase.run(idUser, ({result, error}) => {
      setResponse(result);
      setError(error);
    });
  };

  return {
    response,
    error,
    getUserSession,
    getPostsById,
    setError,
    removePost,
  };
};

export default MyPostListViewModel;
