import { MongoUserRepository } from './../../repositories/implementations/MongoUserRepository';
import { CreateUserCase } from './CreateUserCase';
import { CreateUserController } from './CreateUserController';


const mongoUserRepository = new MongoUserRepository()

const createUserCase = new CreateUserCase(mongoUserRepository)

const createUserController = new CreateUserController(createUserCase)

export { createUserController }