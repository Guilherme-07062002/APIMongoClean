import { IUserRepository } from './../../repositories/IUserRepository';
import { User } from './../../entities/User';
import { ICreateUserDTO } from './CreateUserDTO';

/**Caso de uso - Criação de usuário */
export class CreateUserCase {
    constructor(
        private usersRepository: IUserRepository
    ) { }

    // Por meio da interface IUserRepository passada no parâmetro do construtor podemos acessar seus métodos
    async execute(data: ICreateUserDTO) {
        const user = new User(data)

        this.usersRepository.save(user)
    }
}
