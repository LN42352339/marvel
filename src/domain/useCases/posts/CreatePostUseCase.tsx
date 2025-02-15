import {Asset} from 'react-native-image-picker';
import {Post} from '../../models/Post';

export const CreatePostUseCase = ({PostsRepository}) => {
  return {
    async run(post: Post, file: Asset) {
      const {result, error} = await PostsRepository.create(post, file);
      return {result, error};
    },
  };
};
