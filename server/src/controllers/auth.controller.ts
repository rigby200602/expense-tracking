import type { Request, Response } from "express"

export const register = (req: Request, res: Response) => {
    return res.json({ message: "Register endpoint" })
}
export const login = (req: Request, res: Response) => {
    return res.json({ message: "Login endpoint" })
}
export const logout = (req: Request, res: Response) => {
    return res.json({ message: "Logout endpoint" })
}
export const profile = (req: Request, res: Response) => {
    return res.json({ message: "Profile endpoint" })
}

export const AuthController = {
    register,
    login,
    logout,
    profile
}