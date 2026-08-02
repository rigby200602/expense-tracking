import type { Request, Response } from "express"
import { registerService, loginService, logoutService, profileService } from "../services/auth.service.ts"

// POST: Register
export const register = (req: Request, res: Response) => {
    const result = registerService()

    return res.status(200).json(result)
}
// POST: Login
export const login = (req: Request, res: Response) => {
    const result = loginService()

    return res.status(200).json(result)
}
// POST: Logout
export const logout = (req: Request, res: Response) => {
    const result = logoutService()

    return res.status(200).json(result)
}
// GET: Profile
export const profile = (req: Request, res: Response) => {
    const result = profileService()

    return res.status(200).json(result)
}