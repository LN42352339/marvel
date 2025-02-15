import {asFunction, asValue, createContainer} from 'awilix';
import LoginViewModel from '../presentation/views/auth/login/ViewModel';
import RegisterViewModel from '../presentation/views/auth/register/ViewModel';
import * as AuthDataSource from '../data/datasource/remote/AuthDataSource';
import * as UsersDataSource from '../data/datasource/remote/UsersDataSource';
import {AuthRepository} from '../data/repository/AuthRepository';
import * as PostsDataSource from '../data/datasource/remote/PostsDataSource';
import {LoginUseCase} from '../domain/useCases/auth/LoginUseCase';
import {RegisterUseCase} from '../domain/useCases/auth/RegisterUseCase';
import {LogoutUseCase} from '../domain/useCases/auth/LogoutUseCase';
import HomeViewModel from '../presentation/views/home/ViewModel';
import {GetUserUseCase} from '../domain/useCases/auth/GetUserUseCase';
import ProfileInfoViewModel from '../presentation/views/profile/info/ViewModel';
import {UsersRepository} from '../data/repository/UsersRepository';
import {GetUserByIdUseCase} from '../domain/useCases/users/GetUserByIdUseCase';
import ProfileUpdateViewModel from '../presentation/views/profile/update/ViewModel';
import {UpdateUserUseCase} from '../domain/useCases/users/UpdateUserUseCase';
import {UpdateWithImageUserUseCase} from '../domain/useCases/users/UpdateWithImageUserUseCase';
import MyPostListViewModel from '../presentation/views/post/myList/ViewModel';
import {GetPostsUseCase} from '../domain/useCases/posts/GetPostsUseCase';
import {DislikePostUseCase} from '../domain/useCases/posts/DislikePostUseCase';
import {LikePostUseCase} from '../domain/useCases/posts/LikePostUseCase';
import {UpdateImagePostUseCase} from '../domain/useCases/posts/UpdateImagePostUseCase';
import {UpdatePostUseCase} from '../domain/useCases/posts/UpdatePostUseCase';
import {RemovePostUseCase} from '../domain/useCases/posts/RemovePostUseCase';
import {GetPostsByIdUseCase} from '../domain/useCases/posts/GetPostsByIdUseCase';
import {CreatePostUseCase} from '../domain/useCases/posts/CreatePostUseCase';
import {PostsRepository} from '../data/repository/PostsRepository';
import PostCreateViewModel from '../presentation/views/post/create/ViewModel';
import PostUpdateViewModel from '../presentation/views/post/update/ViewModel';
import PostDetailViewModel from '../presentation/views/post/detail/ViewModel';
import PostListViewModel from '../presentation/views/post/list/ViewModel';
import {GetUserByIdOnceUseCase} from '../domain/useCases/users/GetUserByIdOnceUseCase';

const container = createContainer();

container.register({
  // VIEW MODEL
  LoginViewModel: asFunction(LoginViewModel),
  RegisterViewModel: asFunction(RegisterViewModel),
  HomeViewModel: asFunction(HomeViewModel),
  ProfileInfoViewModel: asFunction(ProfileInfoViewModel),
  ProfileUpdateViewModel: asFunction(ProfileUpdateViewModel),
  PostCreateViewModel: asFunction(PostCreateViewModel),
  PostListViewModel: asFunction(PostListViewModel),
  PostDetailViewModel: asFunction(PostDetailViewModel),
  MyPostListViewModel: asFunction(MyPostListViewModel),
  PostUpdateViewModel: asFunction(PostUpdateViewModel),

  // DATA SOURCE
  AuthDataSource: asValue(AuthDataSource),
  UsersDataSource: asValue(UsersDataSource),
  PostsDataSource: asValue(PostsDataSource),

  // REPOSITORY
  AuthRepository: asFunction(AuthRepository).singleton(),
  UsersRepository: asFunction(UsersRepository).singleton(),
  PostsRepository: asFunction(PostsRepository),

  // USE CASE
  // AUTH
  LoginUseCase: asFunction(LoginUseCase),
  RegisterUseCase: asFunction(RegisterUseCase),
  LogoutUseCase: asFunction(LogoutUseCase).singleton(),
  GetUserUseCase: asFunction(GetUserUseCase),
  // USERS
  GetUserByIdUseCase: asFunction(GetUserByIdUseCase),
  GetUserByIdOnceUseCase: asFunction(GetUserByIdOnceUseCase),
  UpdateUserUseCase: asFunction(UpdateUserUseCase),
  UpdateWithImageUserUseCase: asFunction(UpdateWithImageUserUseCase),
  // POSTS
  CreatePostUseCase: asFunction(CreatePostUseCase),
  GetPostsUseCase: asFunction(GetPostsUseCase),
  GetPostsByIdUseCase: asFunction(GetPostsByIdUseCase),
  RemovePostUseCase: asFunction(RemovePostUseCase),
  UpdatePostUseCase: asFunction(UpdatePostUseCase),
  UpdateImagePostUseCase: asFunction(UpdateImagePostUseCase),
  LikePostUseCase: asFunction(LikePostUseCase),
  DislikePostUseCase: asFunction(DislikePostUseCase),
});

export default container;
