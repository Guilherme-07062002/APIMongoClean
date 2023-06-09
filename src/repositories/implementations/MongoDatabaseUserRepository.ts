import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import userModel, { UserDocument } from '../../providers/MongoDatabaseProvider/models/userModel';

/** Repositório para comunicação com o MongoDB */
export class MongoDatabaseUserRepository implements IUserRepository {

    async save(user: User): Promise<void> {
        try {
            const newUser: UserDocument = new userModel(user);

            // Salva o usuário no banco de dados
            await newUser.save().then(() =>{
                console.log(`O usuário ${user.name} foi cadastrado.`);
            });

        } catch (error) {
            console.error('Erro ao salvar o usuário:', error);
        }
    }
}