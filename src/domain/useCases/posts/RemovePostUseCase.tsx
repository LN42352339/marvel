export const RemovePostUseCase = ({PostsRepository}) => {
  return {
    async run(idPost: string) {
      const {result, error} = await PostsRepository.remove(idPost);
      return {result, error};
    },
  };
};
