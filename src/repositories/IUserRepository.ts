import { User } from "../entities/User";

// Aqui são definidas as funcionalidades que permitirão acesso ao banco

/**Métodos do repositório de User */
export interface IUserRepository {
    save(user: User): Promise<void>
}
