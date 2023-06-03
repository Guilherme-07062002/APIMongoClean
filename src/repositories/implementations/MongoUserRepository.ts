import { User } from './../../entities/User';
import { IUserRepository } from './../IUserRepository';

/**Representação de um repositório Mongo implementando o IUserRepository */
export class MongoUserRepository implements IUserRepository {
    // Armazenando registros em um array
    private users: User[] = []

    async save(user: User): Promise<void> {
        this.users.push(user)
    }
}