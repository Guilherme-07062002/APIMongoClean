import { Request, Response } from "express";
import { CreateUserCase } from "./CreateUserCase";

/**Controlador do caso de uso CreateUser */
export class CreateUserController {
    constructor(
        private createUserCase: CreateUserCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body

        try {
            await this.createUserCase.execute({
                name,
                email
            })
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({
                message: error || 'Unexpected error.'
            })
        }
    }
}