import type { Request, Response } from "express"

export const register = (req: Request, res: Response) => {
    return res.json({ message: "Register endpoint" })
}

export const AuthController = {
    register
}