import {Asset} from 'react-native-image-picker';
import {Post} from '../../domain/models/Post';

export const PostsRepository = ({PostsDataSource}) => {
  return {
    async create(post: Post, file: Asset) {
      const {result, error} = await PostsDataSource.create(post, file);
      return {result, error};
    },
    async updateWithImage(post: Post, file: Asset) {
      const {result, error} = await PostsDataSource.updateWithImage(post, file);
      return {result, error};
    },
    async update(post: Post) {
      const {result, error} = await PostsDataSource.update(post);
      return {result, error};
    },
    async remove(idPost: string) {
      const {result, error} = await PostsDataSource.remove(idPost);
      return {result, error};
    },
    async like(idPost: string, idUser: string) {
      const {result, error} = await PostsDataSource.like(idPost, idUser);
      return {result, error};
    },
    async dislike(idPost: string, idUser: string) {
      const {result, error} = await PostsDataSource.dislike(idPost, idUser);
      return {result, error};
    },
    getPosts(callback) {
      PostsDataSource.getPosts(({result, error}) => {
        callback({result, error});
      });
    },
    getPostsById(idUser: string, callback) {
      PostsDataSource.getPostsById(idUser, ({result, error}) => {
        callback({result, error});
      });
    },
  };
};
