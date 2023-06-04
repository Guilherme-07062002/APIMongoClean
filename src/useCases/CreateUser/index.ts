import {DatabaseConnection} from '../../providers/DatabaseProvider/DatabaseConnection'
import { DatabaseUserRepository } from '../../repositories/implementations/DatabaseUserRepository';
import { CreateUserCase } from './CreateUserCase';
import { CreateUserController } from './CreateUserController';

// Instanciação das classes

const dbUserRepository = new DatabaseUserRepository()

const createUserCase = new CreateUserCase(dbUserRepository)

const createUserController = new CreateUserController(createUserCase)

const dbConnection = new DatabaseConnection()

export { createUserController, dbConnection }