import {Asset} from 'react-native-image-picker';
import {Post} from '../../models/Post';

export const UpdateImagePostUseCase = ({PostsRepository}) => {
  return {
    async run(post: Post, file: Asset) {
      const {result, error} = await PostsRepository.updateWithImage(post, file);
      return {result, error};
    },
  };
};
