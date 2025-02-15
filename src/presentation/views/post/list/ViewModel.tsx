import {useState} from 'react';
import {Post} from '../../../../domain/models/Post';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const PostListViewModel = ({
  GetUserUseCase,
  GetPostsUseCase,
  LikePostUseCase,
  DislikePostUseCase,
}) => {
  const [response, setResponse] = useState<Post[]>();
  const [error, setError] = useState('');

  const getUserSession = () => {
    const {result, error} = GetUserUseCase.run();
    const myUser = result as FirebaseAuthTypes.User;
    return myUser;
    ``;
  };

  const like = async (idPost: string) => {
    const {result, error} = await LikePostUseCase.run(
      idPost,
      getUserSession().uid,
    );
  };

  const dislike = async (idPost: string) => {
    const {result, error} = await DislikePostUseCase.run(
      idPost,
      getUserSession().uid,
    );
  };

  const getPosts = () => {
    GetPostsUseCase.run(({result, error}) => {
      setResponse(result);
      setError(error);
      console.log('Response ', result);
    });
  };

  return {
    response,
    error,
    getPosts,
    setError,
    like,
    dislike,
    getUserSession,
  };
};

export default PostListViewModel;
