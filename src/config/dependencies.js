import { CreateUserRepository,userLoginRepository } from "../interface/repository/index.js";
import { createUserUseCase,userLoginUseCase } from "../usecases/index.js";

const repository = {
  CreateUserRepository,
  userLoginRepository

};
const usecase = {
  createUserUseCase,
  userLoginUseCase
  
};

export const dependencies = {
  repository,
  usecase
};
