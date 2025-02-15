export const LikePostUseCase = ({PostsRepository}) => {
  return {
    async run(idPost: string, idUser: string) {
      const {result, error} = await PostsRepository.like(idPost, idUser);
      return {result, error};
    },
  };
};
