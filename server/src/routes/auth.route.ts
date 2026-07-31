import { Router } from 'express'
import { register,login,logout,profile } from '../controllers/auth.controller.ts'

const authRouter = Router()
// Public routes
authRouter.post('/register', register)
authRouter.post('/login', login)
// Protected routes
authRouter.post('/logout', logout)
authRouter.get('/profile', profile)

export default authRouter