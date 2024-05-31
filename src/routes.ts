import { Router } from 'express'
import { CreateUserController } from './controllers/user/CreateUserControllers'
const router = Router()

// -- Rota de User
router.post('/users', new CreateUserController().handle)

export { router }