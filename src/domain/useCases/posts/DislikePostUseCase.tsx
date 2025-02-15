export const DislikePostUseCase = ({PostsRepository}) => {
  return {
    async run(idPost: string, idUser: string) {
      const {result, error} = await PostsRepository.dislike(idPost, idUser);
      return {result, error};
    },
  };
};
