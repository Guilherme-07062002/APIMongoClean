/**Entidade Usuário */
export class User {
    public id: number
    public name: string
    public email: string

    constructor(data: Partial<User>) {
        Object.assign(this, data)
    }
}
