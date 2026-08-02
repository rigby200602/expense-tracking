import { Router } from 'express'
import { register,login,logout,profile } from '../controllers/auth.controller.ts'

const authRouter = Router()
// Public routes
authRouter.post('/register', register) // POST: Register
authRouter.post('/login', login) // POST: Login
// Protected routes
authRouter.post('/logout', logout) // POST: Logout
authRouter.get('/profile', profile) // GET: Profile

export default authRouter