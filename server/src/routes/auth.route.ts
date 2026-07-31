import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.ts'
// Route for auth
const authRouter = Router()

authRouter.post('/register', AuthController. register)
authRouter.post('/login', AuthController.login)
authRouter.post('/logout', AuthController.logout)
authRouter.get('/profile', AuthController.profile)

export default authRouter