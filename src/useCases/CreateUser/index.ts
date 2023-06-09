import { MongoDatabaseConnection } from '../../providers/MongoDatabaseProvider/MongoDatabaseConnection'
import { MongoDatabaseUserRepository } from '../../repositories/implementations/MongoDatabaseUserRepository';
import { CreateUserCase } from './CreateUserCase';
import { CreateUserController } from './CreateUserController';

// Instanciação das classes - "Dependency Injection Container"

const dbUserRepository = new MongoDatabaseUserRepository()

const createUserCase = new CreateUserCase(dbUserRepository)

const createUserController = new CreateUserController(createUserCase)

const dbConnection = new MongoDatabaseConnection()

export { createUserController, dbConnection }