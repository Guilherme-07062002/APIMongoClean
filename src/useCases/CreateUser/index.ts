import { MongoConnection } from './../../providers/MongoDBProvider/MongoDBConnection';
import { MongoUserRepository } from './../../repositories/implementations/MongoUserRepository';
import { CreateUserCase } from './CreateUserCase';
import { CreateUserController } from './CreateUserController';

// Instanciação das classes

const mongoUserRepository = new MongoUserRepository()

const createUserCase = new CreateUserCase(mongoUserRepository)

const createUserController = new CreateUserController(createUserCase)

const mongoConnection = new MongoConnection()

export { createUserController, mongoConnection }