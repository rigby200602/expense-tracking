import type { Request, Response } from "express"
import { registerService, loginService, logoutService, profileService } from "../services/auth.service.ts"

export const register = (req: Request, res: Response) => {
    const result = registerService()

    return res.status(200).json(result)
}
export const login = (req: Request, res: Response) => {
    const result = loginService()

    return res.status(200).json(result)
}
export const logout = (req: Request, res: Response) => {
    const result = logoutService()

    return res.status(200).json(result)
}
export const profile = (req: Request, res: Response) => {
    const result = profileService()

    return res.status(200).json(result)
}