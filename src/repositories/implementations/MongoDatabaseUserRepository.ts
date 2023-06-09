import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import MongoUserModel from '../../providers/MongoDatabaseProvider/models/MongoUserModel';

/** Repositório para comunicação com o MongoDB */
export class MongoDatabaseUserRepository implements IUserRepository {

    async save(user: User): Promise<void> {
        try {
            // Crie uma nova instância do modelo do usuário com os dados fornecidos
            const newUser = new MongoUserModel({
                name: user.name,
                email: user.email,
            });

            // Salva o usuário
            await newUser.save();
            console.log(`O usuário ${user.name} foi cadastrado.`);
        } catch (error) {
            console.error('Erro ao salvar o usuário:', error);
        }
    }
}