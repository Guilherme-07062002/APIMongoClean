import { IUserRepository } from './../../repositories/IUserRepository';
import { User } from './../../entities/User';

/**Caso de uso - Criação de usuário */
export class CreateUserCase{
    constructor(
        private usersRepository: IUserRepository
    ) {}

    // Por meio da interface IUserRepository passada no parâmetro do construtor podemos acessar seus métodos
    async execute(){
        this.usersRepository.save()
    }
}