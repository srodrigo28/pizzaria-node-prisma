import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    throw new Error('Error :( ')
    // res.json({ message: 'Hello World' })
})

export { router }