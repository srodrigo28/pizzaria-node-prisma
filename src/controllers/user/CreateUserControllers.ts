import { Request, Response } from 'express'

class CreateUserController{
    async handle(req: Request, res: Response){
        return res.json({ ok: true })
    }
}

export { CreateUserController }