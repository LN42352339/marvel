import {asFunction, createContainer} from 'awilix';
import LoginViewModel from '../views/auth/login/ViewModel';
import ResgisterViewModel from '../views/auth/register/ViewModel';

const container = createContainer();

container.register({
  LoginViewModel: asFunction(LoginViewModel),
  ResgisterViewModel: asFunction(ResgisterViewModel),
});

export default container;
