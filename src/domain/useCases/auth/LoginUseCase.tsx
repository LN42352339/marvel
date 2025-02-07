export const LoginUseCase = ({AuthRepository}) => {
  return {
    async run(email: string, password: string) {
      const {result, error} = await AuthRepository.login(email, password);
      return {result, error};
    },
  };
};
