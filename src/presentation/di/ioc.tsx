import {asFunction, asValue, createContainer} from 'awilix';
import LoginViewModel from '../views/auth/login/ViewModel';
import ResgisterViewModel from '../views/auth/register/ViewModel';
import * as AuthDataSource from '../../data/datasource/remote/AuthDataSource';
import { AuthRepository } from '../../data/repository/AuthRepository';
import { LoginUseCase } from '../../domain/useaCases/auth/LoginUseCase';

const container = createContainer();

container.register({
  LoginViewModel: asFunction(LoginViewModel),
  ResgisterViewModel: asFunction(ResgisterViewModel),
  AuthDataSource: asValue(AuthDataSource),
  AuthRepository: asFunction(AuthRepository),
  LoginUseCase: asFunction(LoginUseCase),
});

export default container;
