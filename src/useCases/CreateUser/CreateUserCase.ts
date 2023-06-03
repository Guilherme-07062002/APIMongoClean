import { User } from './../../entities/User';

export class CreateUserCase{
    constructor(data: Partial<User>){
        Object.assign(this, data)
    }

    async execute(){
        
    }
}