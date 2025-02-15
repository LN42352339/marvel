export const GetPostsUseCase = ({PostsRepository}) => {
  return {
    run(callback) {
      PostsRepository.getPosts(({result, error}) => {
        callback({result, error});
      });
    },
  };
};
