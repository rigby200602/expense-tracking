import { Router } from 'express'
import AuthController from '../controllers/auth.controller.ts'
// Route for auth
const authRouter = Router()

authRouter.post('/register', AuthController)
