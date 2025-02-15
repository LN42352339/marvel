export const GetPostsByIdUseCase = ({PostsRepository}) => {
  return {
    run(idUser: string, callback) {
      PostsRepository.getPostsById(idUser, ({result, error}) => {
        callback({result, error});
      });
    },
  };
};
