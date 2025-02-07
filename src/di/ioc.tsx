import {asFunction, asValue, createContainer} from 'awilix';
import LoginViewModel from '../presentation/views/auth/login/ViewModel';
import RegisterViewModel from '../presentation/views/auth/register/ViewModel';
import * as AuthDataSource from '../data/datasource/remote/AuthDataSource';
import {AuthRepository} from '../data/repository/AuthRepository';
import {LoginUseCase} from '../domain/useCases/auth/LoginUseCase';
import {RegisterUseCase} from '../domain/useCases/auth/RegisterUseCase';
import {LogoutUseCase} from '../domain/useCases/auth/LogoutUseCase';
import HomeViewModel from '../presentation/views/home/ViewModel';
import {GetUserUseCase} from '../domain/useCases/auth/GetUserUseCase';

const container = createContainer();

container.register({
  // VIEW MODEL
  LoginViewModel: asFunction(LoginViewModel),
  RegisterViewModel: asFunction(RegisterViewModel),
  HomeViewModel: asFunction(HomeViewModel),

  //DATA SOURCE
  AuthDataSource: asValue(AuthDataSource),

  // REPOSITORY
  AuthRepository: asFunction(AuthRepository),

  // USE CASE
  LoginUseCase: asFunction(LoginUseCase),
  RegisterUseCase: asFunction(RegisterUseCase),
  LogoutUseCase: asFunction(LogoutUseCase),
  GetUserUseCase: asFunction(GetUserUseCase),
});

export default container;
