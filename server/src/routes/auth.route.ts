import { Router } from 'express'
import AuthController from '../controllers/auth.controller.ts'
// Route for auth
const authRouter = Router()

authRouter.post('/register', AuthController)
authRouter.post('/login', AuthController)
authRouter.post('/logout', AuthController)
authRouter.get('/profile', AuthController)

export default authRouter