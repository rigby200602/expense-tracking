import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.ts'

const authRouter = Router()
// Public routes
authRouter.post('/register', AuthController.register)
authRouter.post('/login', AuthController.login)
// Protected routes
authRouter.post('/logout', AuthController.logout)
authRouter.get('/profile', AuthController.profile)

export default authRouter